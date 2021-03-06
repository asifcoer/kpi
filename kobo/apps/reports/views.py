# coding: utf-8
from rest_framework import viewsets, mixins

from kpi.constants import PERM_VIEW_SUBMISSIONS, PERM_PARTIAL_SUBMISSIONS
from kpi.models import Asset
from kpi.models.object_permission import get_objects_for_user, get_anonymous_user
from .serializers import ReportsListSerializer, ReportsDetailSerializer


class ReportsViewSet(mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    lookup_field = 'uid'

    def get_serializer_class(self):
        if self.action == 'list':
            return ReportsListSerializer
        else:
            return ReportsDetailSerializer

    def get_queryset(self):
        
        # Retrieve all deployed assets first.
        deployed_assets = Asset.objects.filter(asset_versions__deployed=True).distinct()
        # Then retrieve all assets user is allowed to view
        # (user must have 'view_submissions' on Asset objects)
        required_permissions = [
            PERM_VIEW_SUBMISSIONS,
            PERM_PARTIAL_SUBMISSIONS,
        ]
        user_assets = get_objects_for_user(self.request.user,
                                           required_permissions,
                                           deployed_assets,
                                           all_perms_required=False)
        publicly_shared_assets = get_objects_for_user(
            get_anonymous_user(), required_permissions, deployed_assets,
            all_perms_required=False)

        return user_assets | publicly_shared_assets
