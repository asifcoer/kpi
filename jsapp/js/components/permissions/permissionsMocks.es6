/**
* Mock permissions endpoints responses for tests.
*
* NOTE: For simplicity we assume that ROOT_URL is empty string.
*/

// /api/v2/permissions/
const permissions = {
  'count': 9,
  'next': null,
  'previous': null,
  'results': [
    {
      'url': '/api/v2/permissions/add_submissions/',
      'codename': 'add_submissions',
      'implied': [
        '/api/v2/permissions/view_asset/'
      ],
      'contradictory': [],
      'name': '',
      'description': 'Can submit data to asset'
    },
    {
      'url': '/api/v2/permissions/change_asset/',
      'codename': 'change_asset',
      'implied': [
        '/api/v2/permissions/view_asset/'
      ],
      'contradictory': [],
      'name': '',
      'description': 'Can change asset'
    },
    {
      'url': '/api/v2/permissions/change_submissions/',
      'codename': 'change_submissions',
      'implied': [
        '/api/v2/permissions/view_asset/',
        '/api/v2/permissions/view_submissions/'
      ],
      'contradictory': [
        '/api/v2/permissions/partial_submissions/'
      ],
      'name': '',
      'description': 'Can modify submitted data for asset'
    },
    {
      'url': '/api/v2/permissions/partial_submissions/',
      'codename': 'partial_submissions',
      'implied': [
        '/api/v2/permissions/view_asset/'
      ],
      'contradictory': [
        '/api/v2/permissions/view_submissions/',
        '/api/v2/permissions/change_submissions/',
        '/api/v2/permissions/validate_submissions/'
      ],
      'name': '',
      'description': 'Can make partial actions onsubmitted data for asset for specific users'
    },
    {
      'url': '/api/v2/permissions/validate_submissions/',
      'codename': 'validate_submissions',
      'implied': [
        '/api/v2/permissions/view_asset/',
        '/api/v2/permissions/view_submissions/'
      ],
      'contradictory': [
        '/api/v2/permissions/partial_submissions/'
      ],
      'name': '',
      'description': 'Can validate submitted data asset'
    },
    {
      'url': '/api/v2/permissions/view_asset/',
      'codename': 'view_asset',
      'implied': [],
      'contradictory': [],
      'name': '',
      'description': 'Can view asset'
    },
    {
      'url': '/api/v2/permissions/view_submissions/',
      'codename': 'view_submissions',
      'implied': [
        '/api/v2/permissions/view_asset/'
      ],
      'contradictory': [
        '/api/v2/permissions/partial_submissions/'
      ],
      'name': '',
      'description': 'Can view submitted data for asset'
    },
    {
      'url': '/api/v2/permissions/change_collection/',
      'codename': 'change_collection',
      'implied': [
        '/api/v2/permissions/view_collection/'
      ],
      'contradictory': [],
      'name': '',
      'description': 'Can change collection'
    },
    {
      'url': '/api/v2/permissions/view_collection/',
      'codename': 'view_collection',
      'implied': [],
      'contradictory': [],
      'name': '',
      'description': 'Can view collection'
    }
  ]
};

// /api/v2/assets/<uid>/permissions/
const assetWithAnonymousUser = {
  'count': 7,
  'next': null,
  'previous': null,
  'results': [
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pTi9qyEax49ZA5RP9KnNHB/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/add_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pATUgtDW6v44QG4dDDpnEV/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/change_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pUUcqTtQ6FgEDfHUiQbS24/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/change_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/p5BjfEz9JDQtQTzkT7fHA5/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/validate_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pBjfyz5Zxj95866GtEtsR2/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/view_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pQGiudmuLvN6iHEdH8dJAs/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/view_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pV9kCoWAQT9QUeV2EsTLqj/',
      'user': '/api/v2/users/AnonymousUser/',
      'permission': '/api/v2/permissions/view_asset/'
    }
  ]
};

// /api/v2/assets/<uid>/permissions/
const assetWithMultipleUsers = {
  'count': 9,
  'next': null,
  'previous': null,
  'results': [
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pTi9qyEax49ZA5RP9KnNHB/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/add_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pATUgtDW6v44QG4dDDpnEV/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/change_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pUUcqTtQ6FgEDfHUiQbS24/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/change_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/p5BjfEz9JDQtQTzkT7fHA5/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/validate_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pBjfyz5Zxj95866GtEtsR2/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/view_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pQGiudmuLvN6iHEdH8dJAs/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/view_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pETvxGayAJwvPaCnt5biVD/',
      'user': '/api/v2/users/oliver/',
      'permission': '/api/v2/permissions/view_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/p6KekjhZabd7ao9MBQwN7X/',
      'user': '/api/v2/users/john/',
      'permission': '/api/v2/permissions/view_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pxp7BPnP9fohF5ZoH5Uwfa/',
      'user': '/api/v2/users/john/',
      'permission': '/api/v2/permissions/view_asset/'
    }
  ]
};

// /api/v2/assets/<uid>/permissions/
const assetWithPartial = {
  'count': 8,
  'next': null,
  'previous': null,
  'results': [
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pTi9qyEax49ZA5RP9KnNHB/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/add_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pATUgtDW6v44QG4dDDpnEV/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/change_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pUUcqTtQ6FgEDfHUiQbS24/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/change_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/p5BjfEz9JDQtQTzkT7fHA5/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/validate_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pBjfyz5Zxj95866GtEtsR2/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/view_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pQGiudmuLvN6iHEdH8dJAs/',
      'user': '/api/v2/users/kobo/',
      'permission': '/api/v2/permissions/view_submissions/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/p6KekjhZabd7ao9MBQwN7X/',
      'user': '/api/v2/users/leszek/',
      'permission': '/api/v2/permissions/view_asset/'
    },
    {
      'url': '/api/v2/assets/arMB2dNgwewktv954wmo9e/permissions/pxp7BPnP9fohF5ZoH5Uwfa/',
      'user': '/api/v2/users/leszek/',
      'permission': '/api/v2/permissions/partial_submissions/',
      'partial_permissions': [
        {
          'url': '/api/v2/permissions/view_submissions/',
          'filters': [
            {'_submitted_by': {'$in': ['john', 'oliver']}}
          ]
        },
      ]
    }
  ]
};

export default {
  permissions: permissions,
  assetWithAnon: assetWithAnonymousUser,
  assetWithMulti: assetWithMultipleUsers,
  assetWithPartial: assetWithPartial
};
