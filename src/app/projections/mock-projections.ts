import {Projection} from './projection';
export const PROJECTIONS: Projection[] =
    [
        {
            'code': 'EPSG:4326',
            'nom': 'WGS84',
            'proj4': '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs',
            'region': 'Monde',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/4326/'
        },

        {
            'code': 'EPSG:3857',
            'nom': 'WGS84 / Pseudo Mercator',
            'proj4': '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
            'region': 'Monde',
            'datum': 'WGS84',
            'link': 'https://epsg.io/3857'
        },

        {
            'code': 'EPSG:3395',
            'nom': 'WGS 84 / World Mercator',
            'proj4': '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'Monde',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/3395/'
        },

        {
            'code': 'EPSG:32662',
            'nom': 'WGS 84 / Plate Carree',
            'proj4': '+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'Monde',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/32662/'
        },


        {
            'code': 'EPSG:2154',
            'nom': 'RGF93 / Lambert-93',
            'proj4': '+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/2154/'
        },

        {
            'code': 'EPSG:3942',
            'nom': 'Lambert Zone 1 (CC42)',
            'proj4': '+proj=lcc +lat_1=41.25 +lat_2=42.75 +lat_0=42 +lon_0=3 +x_0=1700000 +y_0=1200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3942/'
        },

        {
            'code': 'EPSG:3943',
            'nom': 'Lambert Zone 2 (CC43)',
            'proj4': '+proj=lcc +lat_1=42.25 +lat_2=43.75 +lat_0=43 +lon_0=3 +x_0=1700000 +y_0=2200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3943/'
        },

        {
            'code': 'EPSG:3944',
            'nom': 'Lambert Zone 3 (CC44)',
            'proj4': '+proj=lcc +lat_1=43.25 +lat_2=44.75 +lat_0=44 +lon_0=3 +x_0=1700000 +y_0=3200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3944/'
        },

        {
            'code': 'EPSG:3945',
            'nom': 'Lambert Zone 4 (CC45)',
            'proj4': '+proj=lcc +lat_1=44.25 +lat_2=45.75 +lat_0=45 +lon_0=3 +x_0=1700000 +y_0=4200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3945/'
        },

        {
            'code': 'EPSG:3946',
            'nom': 'Lambert Zone 5 (CC46)',
            'proj4': '+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3946/'
        },

        {
            'code': 'EPSG:3947',
            'nom': 'Lambert Zone 6 (CC47)',
            'proj4': '+proj=lcc +lat_1=46.25 +lat_2=47.75 +lat_0=47 +lon_0=3 +x_0=1700000 +y_0=6200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3947/'
        },

        {
            'code': 'EPSG:3948',
            'nom': 'Lambert Zone 7 (CC48)',
            'proj4': '+proj=lcc +lat_1=47.25 +lat_2=48.75 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3948/'
        },

        {
            'code': 'EPSG:3949',
            'nom': 'Lambert Zone 8 (CC49)',
            'proj4': '+proj=lcc +lat_1=48.25 +lat_2=49.75 +lat_0=49 +lon_0=3 +x_0=1700000 +y_0=8200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3949/'
        },

        {
            'code': 'EPSG:3950',
            'nom': 'Lambert Zone 9 (CC50)',
            'proj4': '+proj=lcc +lat_1=49.25 +lat_2=50.75 +lat_0=50 +lon_0=3 +x_0=1700000 +y_0=9200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'RGF93',
            'link': 'http://spatialreference.org/ref/epsg/3950/'
        },

        {
            'code': 'EPSG:27561',
            'nom': 'Lambert Nord France',
            'proj4': '+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27561/'
        },

        {
            'code': 'EPSG:27562',
            'nom': 'Lambert Centre France',
            'proj4': '+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27562/'
        },

        {
            'code': 'EPSG:27563',
            'nom': 'Lambert Sud France',
            'proj4': '+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27563/'
        },

        {
            'code': 'EPSG:27564',
            'nom': 'Lambert Corse',
            'proj4': '+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27564/'
        },

        {
            'code': 'EPSG:27571',
            'nom': 'Lambert Zone I',
            'proj4': '+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27571/'
        },

        {
            'code': 'EPSG:27572',
            'nom': 'Lambert Zone II / Lambert 2 étendu',
            'proj4': '+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27572/'
        },

        {
            'code': 'EPSG:27573',
            'nom': 'Lambert Zone III',
            'proj4': '+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27573/'
        },

        {
            'code': 'EPSG:27574',
            'nom': 'Lambert Zone IV',
            'proj4': '+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs',
            'region': 'France',
            'datum': 'NTF',
            'link': 'http://spatialreference.org/ref/epsg/27574/'
        },

        {
            'code': 'EPSG:23030',
            'nom': 'ED50 - UTM Zone 30 Nord',
            'proj4': '+proj=utm +zone=30 +ellps=intl +units=m +no_defs',
            'region': 'France',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23030/'
        },

        {
            'code': 'EPSG:23031',
            'nom': 'ED50 - UTM Zone 31 Nord',
            'proj4': '+proj=utm +zone=31 +ellps=intl +units=m +no_defs',
            'region': 'France',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23031/'
        },

        {
            'code': 'EPSG:23032',
            'nom': 'ED50 - UTM Zone 32 Nord',
            'proj4': '+proj=utm +zone=32 +ellps=intl +units=m +no_defs',
            'region': 'France',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23032/'
        },

        {
            'code': 'EPSG:32630',
            'nom': 'WGS84 - UTM Zone 30 Nord',
            'proj4': '+proj=utm +zone=30 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'France',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/32630/'
        },

        {
            'code': 'EPSG:32631',
            'nom': 'WGS84 - UTM Zone 31 Nord',
            'proj4': '+proj=utm +zone=31 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'France',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/32631/'
        },

        {
            'code': 'EPSG:32632',
            'nom': 'WGS84 - UTM Zone 32 Nord',
            'proj4': '+proj=utm +zone=32 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'France',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/32632/'
        },

        {
            'code': 'IGNF: GEOPORTALFXX',
            'nom': 'Geoportail - France metropolitaine',
            'proj4': '+proj=eqc +lat_ts=46.5 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0.0000,0.0000,0.0000,0,0,0,0 +units=m +no_defs',
            'region': 'France',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6882/'
        },

        {
            'code': 'EPSG:2969',
            'nom': 'Fort Marigot - UTM Zone 20N',
            'proj4': '+proj=utm +zone=20 +ellps=intl +towgs84=137,248,-430,0,0,0,0 +units=m +no_defs',
            'region': 'Guadeloupe',
            'datum': 'UTM',
            'link': 'http://spatialreference.org/ref/epsg/2969/'
        },

        {
            'code': 'EPSG:2970',
            'nom': 'Saint-Anne - UTM Zone 20N',
            'proj4': '+proj=utm +zone=20 +ellps=intl +units=m +no_defs',
            'region': 'Guadeloupe',
            'datum': 'GUAD48',
            'link': 'http://spatialreference.org/ref/epsg/2970/'
        },


        {
            'code': 'EPSG:32620',
            'nom': 'WGS84 - UTM Zone 20N',
            'proj4': '+proj=utm +zone=20 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'Guadeloupe',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/32620/'
        },

        {
            'code': 'EPSG:3312',
            'nom': 'CSG67 - UTM Zone 21N',
            'proj4': '+proj=utm +zone=21 +ellps=intl +towgs84=-186,230,110,0,0,0,0 +units=m +no_defs',
            'region': 'Guyane',
            'datum': 'CSG67',
            'link': 'http://spatialreference.org/ref/epsg/3312/'
        },

        {
            'code': 'EPSG:2971',
            'nom': 'CSG67 - UTM Zone 22N',
            'proj4': '+proj=utm +zone=22 +ellps=intl +towgs84=-186,230,110,0,0,0,0 +units=m +no_defs',
            'region': 'Guyane',
            'datum': 'CSG67',
            'link': 'http://spatialreference.org/ref/epsg/2971/'
        },

        {
            'code': 'EPSG:3313',
            'nom': 'RGFG95 - UTM Zone 21N',
            'proj4': '+proj=utm +zone=21 +ellps=GRS80 +towgs84=2,2,-2,0,0,0,0 +units=m +no_defs',
            'region': 'Guyane',
            'datum': 'RGFG95',
            'link': 'http://spatialreference.org/ref/epsg/3313/'
        },

        {
            'code': 'EPSG:2972',
            'nom': 'RGFG95 - UTM Zone 22N',
            'proj4': '+proj=utm +zone=22 +ellps=GRS80 +towgs84=2,2,-2,0,0,0,0 +units=m +no_defs',
            'region': 'Guyane',
            'datum': 'RGFG95',
            'link': 'http://spatialreference.org/ref/epsg/2972/'
        },

        {
            'code': 'IGNF: GEOPORTALGUF',
            'nom': 'Geoportail Guyane',
            'proj4': '+proj=eqc +nadgrids=null +a=6378137.0000 +rf=298.2572221010000 +lat_0=0.000000000 +lon_0=0.000000000 +lat_ts=4.000000000 +x_0=0.000 +y_0=0.000 +units=m +no_defs',
            'region': 'Guyane',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6890/'
        },



        {
            'code': 'EPSG:2973',
            'nom': 'Fort Desaix - UTM Zone 20N',
            'proj4': '+proj=utm +zone=20 +ellps=intl +units=m +no_defs ',
            'region': 'Martinique',
            'datum': 'MART38',
            'link': 'http://spatialreference.org/ref/epsg/2973/'
        },

        {
            'code': 'EPSG:32620',
            'nom': 'WGS84 - UTM Zone 20N',
            'proj4': '+proj=utm +zone=20 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
            'region': 'Martinique',
            'datum': 'WGS84',
            'link': 'http://spatialreference.org/ref/epsg/32620/'
        },

        {
            'code': 'IGNF:GEOPORTALANF',
            'nom': 'Geoportail - Antilles',
            'proj4': '+proj=eqc +nadgrids=null +a=6378137.0000 +rf=298.2572221010000 +lat_0=0.000000000 +lon_0=0.000000000 +lat_ts=15.000000000 +x_0=0.000 +y_0=0.000 +units=m +no_defs',
            'region': 'Martinique',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6888/'
        },


        {
            'code': 'EPSG:2975',
            'nom': 'RGR92 - UTM Zone 40S',
            'proj4': '+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'Réunion',
            'datum': 'RGR92',
            'link': 'http://spatialreference.org/ref/epsg/2975/'
        },


        {
            'code': 'IGNF: GEOPORTALREU',
            'nom': 'Geoportail - Réunion',
            'proj4': '+proj=eqc +nadgrids=null +a=6378137.0000 +rf=298.2572221010000 +lat_0=0.000000000 +lon_0=0.000000000 +lat_ts=-21.000000000 +x_0=0.000 +y_0=0.000 +units=m +no_defs',
            'region': 'Réunion',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6891/'
        },



        {
            'code': 'EPSG:2978',
            'nom': 'IGN72 Nuku Hiva - UTM Zone 7S',
            'proj4': '+proj=utm +zone=7 +south +ellps=intl +units=m +no_defs',
            'region': 'Polynésie',
            'datum': 'IGN72',
            'link': 'http://spatialreference.org/ref/epsg/2978/'
        },

        {
            'code': 'EPSG:2977',
            'nom': 'Tahaa - UTM Zone 5S',
            'proj4': '+proj=utm +zone=5 +south +ellps=intl +units=m +no_defs',
            'region': 'Polynésie',
            'datum': 'Tahaa',
            'link': 'http://spatialreference.org/ref/epsg/2977/'
        },

        {
            'code': 'EPSG:2976',
            'nom': 'Tahiti 52 / UTM Zone 6S',
            'proj4': '+proj=utm +zone=6 +south +ellps=intl +towgs84=162,117,154,0,0,0,0 +units=m +no_defs',
            'region': 'Polynésie',
            'datum': 'Tahiti 52',
            'link': 'http://spatialreference.org/ref/epsg/2976/'
        },

        {
            'code': 'EPSG:3304',
            'nom': 'Tahiti 79 / UTM Zone 6S',
            'proj4': '+proj=utm +zone=6 +south +ellps=intl +units=m +no_defs',
            'region': 'Polynésie',
            'datum': 'Tahiti 79',
            'link': 'http://spatialreference.org/ref/epsg/3304/'
        },

        {
            'code': 'IGNF: GEOPORTALPYF',
            'nom': 'Geopotail - Polynésie',
            'proj4': '+proj=eqc +nadgrids=null +a=6378137.0000 +rf=298.2572221010000 +lat_0=0.000000000 +lon_0=0.000000000 +lat_ts=-15.000000000 +x_0=0.000 +y_0=0.000 +units=m +no_defs',
            'region': 'Polynésie',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6897/'
        },


        {
            'code': 'EPSG:2980',
            'nom': 'Combani 1950 / UTM Zone 38S',
            'proj4': '+proj=utm +zone=38 +south +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +units=m +no_defs',
            'region': 'Mayotte',
            'datum': 'MCBN50',
            'link': 'http://spatialreference.org/ref/epsg/2980/'
        },

        {
            'code': 'IGNF: GEOPORTALMYT',
            'nom': 'Geoportail - Mayotte',
            'proj4': '+proj=eqc +nadgrids=null +a=6378137.0000 +rf=298.2572221010000 +lat_0=0.000000000 +lon_0=0.000000000 +lat_ts=-12.000000000 +x_0=0.000 +y_0=0.000 +units=m +no_defs',
            'region': 'Mayotte',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6892/'
        },

        {
            'code': 'EPSG:3163',
            'nom': 'Lambert Nouvelle Caledonie',
            'proj4': '+proj=lcc +lat_1=-20.66666666666667 +lat_2=-22.33333333333333 +lat_0=-21.5 +lon_0=166 +x_0=400000 +y_0=300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'Nouvelle Caledonie',
            'datum': 'RGNC91',
            'link': 'http://spatialreference.org/ref/epsg/3163/'
        },

        {
            'code': 'IGNF: GEOPORTALNCL',
            'nom': 'Geoportail Nouvelle Caledonie',
            'proj4': '+proj=eqc +nadgrids=null +a=6378137.0000 +rf=298.2572221010000 +lat_0=0.000000000 +lon_0=0.000000000 +lat_ts=-22.000000000 +x_0=0.000 +y_0=0.000 +units=m +no_defs',
            'region': 'Nouvelle Caledonie',
            'datum': 'IGNF',
            'link': 'http://spatialreference.org/ref/sr-org/6896/'
        },

        {
            'code': 'EPSG:31370',
            'nom': 'Belge 1972 / Lambert 72 Belgique',
            'proj4': '+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1 +units=m +no_defs',
            'region': 'Belgique',
            'datum': 'BELG72',
            'link': 'http://spatialreference.org/ref/epsg/31370/'
        },

        {
            'code': 'EPSG:3447',
            'nom': 'Lambert 2005 Belge',
            'proj4': '+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=150328 +y_0=166262 +ellps=GRS80 +units=m +no_defs',
            'region': 'Belgique',
            'datum': 'ETRS89',
            'link': 'http://spatialreference.org/ref/epsg/3447/'
        },

        {
            'code': 'EPSG:3812',
            'nom': 'Lambert 2008 Belge',
            'proj4': '+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
            'region': 'Belgique',
            'datum': 'ETRS89',
            'link': 'http://spatialreference.org/ref/epsg/3812/'
        },

        {
            'code': 'EPSG:21500',
            'nom': 'Belge Lambert 50',
            'proj4': '+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=90 +lon_0=0 +x_0=150000 +y_0=5400000 +ellps=intl +pm=brussels +units=m +no_defs',
            'region': 'Belgique',
            'datum': '',
            'link': 'http://spatialreference.org/ref/epsg/21500/'
        },

        {
            'code': 'EPSG:31300',
            'nom': 'Belge Lambert 72',
            'proj4': '+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=90 +lon_0=4.356939722222222 +x_0=150000.01256 +y_0=5400088.4378 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs',
            'region': 'Belgique',
            'datum': '',
            'link': 'http://spatialreference.org/ref/epsg/31300/'
        },

        {
            'code': 'EPSG:31370',
            'nom': 'Belgian Lambert 72',
            'proj4': '+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs',
            'region': 'Belgique',
            'datum': '',
            'link': 'http://spatialreference.org/ref/epsg/31370/'
        },

        {
            'code': 'EPSG:29902',
            'nom': 'TM65 / Irish Grid',
            'proj4': '+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +a=6377340.189 +b=6356034.447938534 +units=m +no_defs ',
            'region': 'Irlande',
            'datum': 'TM65',
            'link': 'http://spatialreference.org/ref/epsg/29902/'
        },

        {
            'code': 'EPSG:2169',
            'nom': 'Luxembourg 1930 / Gauss',
            'proj4': '+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-193,13.7,-39.3,-0.41,-2.933,2.688,0.43 +units=m +no_defs',
            'region': 'Luxembourg',
            'datum': 'LURES',
            'link': 'http://spatialreference.org/ref/epsg/2169/'
        },

        {
            'code': 'EPSG:21781',
            'nom': 'CH1903 / LV03',
            'proj4': '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs',
            'region': 'Suisse',
            'datum': 'BERNNEW',
            'link': 'http://spatialreference.org/ref/epsg/21781/'
        },

        {
            'code': 'EPSG:2056',
            'nom': 'CH1903+ / LV95',
            'proj4': '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs',
            'region': 'Suisse',
            'datum': 'CH1903+',
            'link': 'http://spatialreference.org/ref/epsg/2056/'
        },

        {
            'code': 'EPSG:23032',
            'nom': 'ED50 / UTM zone 32N',
            'proj4': '+proj=utm +zone=32 +ellps=intl +units=m +no_defs',
            'region': 'Italie',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23032/'
        },

        {
            'code': 'EPSG:23033',
            'nom': 'ED50 / UTM zone 33N',
            'proj4': '+proj=utm +zone=33 +ellps=intl +units=m +no_defs',
            'region': 'Italie',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23033/'
        },

        {
            'code': 'EPSG:3003',
            'nom': 'Monte Mario / Italy zone 1 ',
            'proj4': '+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=1500000 +y_0=0 +ellps=intl +units=m +no_defs',
            'region': 'Italie',
            'datum': 'Monte Mario',
            'link': 'http://spatialreference.org/ref/epsg/3003/'
        },

        {
            'code': 'EPSG:3004',
            'nom': 'Monte Mario / Italy zone 2 ',
            'proj4': '+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=2520000 +y_0=0 +ellps=intl +units=m +no_defs',
            'region': 'Italie',
            'datum': 'Monte Mario',
            'link': 'http://spatialreference.org/ref/epsg/3004/'
        },

        {
            'code': 'EPSG:23029',
            'nom': 'ED50 / UTM Zone 29N',
            'proj4': '+proj=utm +zone=29 +ellps=intl +units=m +no_defs',
            'region': 'Espagne',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23029/'
        },

        {
            'code': 'EPSG:23030',
            'nom': 'ED50 / UTM Zone 30N',
            'proj4': '+proj=utm +zone=30 +ellps=intl +units=m +no_defs',
            'region': 'Espagne',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23030/'
        },

        {
            'code': 'EPSG:23031',
            'nom': 'ED50 / UTM Zone 31N',
            'proj4': '+proj=utm +zone=31 +ellps=intl +units=m +no_defs',
            'region': 'Espagne',
            'datum': 'ED50',
            'link': 'http://spatialreference.org/ref/epsg/23031/'
        },

        {
            'code': 'EPSG:2062',
            'nom': 'Madrid 1870 (Madrid) / Spain',
            'proj4': '+proj=lcc +lat_1=40 +lat_0=40 +lon_0=0 +k_0=0.9988085293 +x_0=600000 +y_0=600000 +a=6378298.3 +b=6356657.142669561 +pm=madrid +units=m +no_defs',
            'region': 'Espagne',
            'datum': 'Madrid 1870',
            'link': 'http://spatialreference.org/ref/epsg/2062/'
        },

        {
            'code': 'EPSG:26711',
            'nom': 'NAD27 / UTM 11N',
            'proj4': '+proj=utm +zone=11 +ellps=clrk66 +datum=NAD27 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD27',
            'link': 'http://spatialreference.org/ref/epsg/26711/'
        },

        {
            'code': 'EPSG:26712',
            'nom': 'NAD27 / UTM 12N',
            'proj4': '+proj=utm +zone=12 +ellps=clrk66 +datum=NAD27 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD27',
            'link': 'http://spatialreference.org/ref/epsg/26712/'
        },

        {
            'code': 'EPSG:3309',
            'nom': 'NAD27 / California Albers',
            'proj4': '+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=clrk66 +datum=NAD27 +units=m +no_defs ',
            'region': 'USA-Canada',
            'datum': 'NAD27',
            'link': 'http://spatialreference.org/ref/epsg/3309/'
        },

        {
            'code': 'EPSG:26907',
            'nom': 'NAD83 / UTM Zone 7N',
            'proj4': '+proj=utm +zone=7 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26907/'
        },

        {
            'code': 'EPSG:26908',
            'nom': 'NAD83 / UTM Zone 8N',
            'proj4': '+proj=utm +zone=8 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26908/'
        },

        {
            'code': 'EPSG:26909',
            'nom': 'NAD83 / UTM Zone 9N',
            'proj4': '+proj=utm +zone=9 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26909/'
        },

        {
            'code': 'EPSG:26910',
            'nom': 'NAD83 / UTM Zone 10N',
            'proj4': '+proj=utm +zone=10 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26910/'
        },

        {
            'code': 'EPSG:26911',
            'nom': 'NAD83 / UTM Zone 11N',
            'proj4': '+proj=utm +zone=11 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26911/'
        },

        {
            'code': 'EPSG:26912',
            'nom': 'NAD83 / UTM Zone 12N',
            'proj4': '+proj=utm +zone=12 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26912/'
        },

        {
            'code': 'EPSG:26913',
            'nom': 'NAD83 / UTM Zone 13N',
            'proj4': '+proj=utm +zone=13 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26913/'
        },

        {
            'code': 'EPSG:26914',
            'nom': 'NAD83 / UTM Zone 14N',
            'proj4': '+proj=utm +zone=14 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26914/'
        },

        {
            'code': 'EPSG:26915',
            'nom': 'NAD83 / UTM Zone 15N',
            'proj4': '+proj=utm +zone=15 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26915/'
        },

        {
            'code': 'EPSG:26916',
            'nom': 'NAD83 / UTM Zone 16N',
            'proj4': '+proj=utm +zone=16 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26916/'
        },

        {
            'code': 'EPSG:26917',
            'nom': 'NAD83 / UTM Zone 17N',
            'proj4': '+proj=utm +zone=17 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26917/'
        },


        {
            'code': 'EPSG:26918',
            'nom': 'NAD83 / UTM Zone 18N',
            'proj4': '+proj=utm +zone=18 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26918/'
        },

        {
            'code': 'EPSG:26919',
            'nom': 'NAD83 / UTM Zone 19N',
            'proj4': '+proj=utm +zone=19 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26919/'
        },

        {
            'code': 'EPSG:26920',
            'nom': 'NAD83 / UTM Zone 20N',
            'proj4': '+proj=utm +zone=20 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26920/'
        },

        {
            'code': 'EPSG:26921',
            'nom': 'NAD83 / UTM Zone 21N',
            'proj4': '+proj=utm +zone=21 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26921/'
        },

        {
            'code': 'EPSG:26922',
            'nom': 'NAD83 / UTM Zone 22N',
            'proj4': '+proj=utm +zone=22 +ellps=GRS80 +datum=NAD83 +units=m +no_defs',
            'region': 'USA-Canada',
            'datum': 'NAD83',
            'link': 'http://spatialreference.org/ref/epsg/26922/'
        }
    ];
