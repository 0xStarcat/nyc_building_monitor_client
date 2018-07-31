// https://www1.nyc.gov/assets/finance/jump/hlpbldgcode.html
// AND
// https://www.propertyshark.com/mason/text/nyc_building_class.html

export const convertBuildingCodeToDescription = code => {
  switch (code) {
    case 'A0':
      return 'CAPE COD'
    case 'A1':
      return 'TWO STORIES - DETACHED SM OR MID'
    case 'A2':
      return 'ONE STORY - PERMANENT LIVING QUARTER'
    case 'A3':
      return 'LARGE SUBURBAN RESIDENCE'
    case 'A4':
      return 'CITY RESIDENCE ONE FAMILY'
    case 'A5':
      return 'ONE FAMILY ATTACHED OR SEMI-DETACHED'
    case 'A6':
      return 'SUMMER COTTAGE'
    case 'A7':
      return 'MANSION TYPE OR TOWN HOUSE'
    case 'A8':
      return 'BUNGALOW COLONY - COOPERATIVELY OWNED LAND'
    case 'A9':
      return 'MISCELLANEOUS ONE FAMILY'
    case 'B1':
      return 'TWO FAMILY BRICK'
    case 'B2':
      return 'TWO FAMILY FRAME'
    case 'B3':
      return 'TWO FAMILY CONVERTED FROM ONE FAMILY'
    case 'B9':
      return 'MISCELLANEOUS TWO FAMILY'
    case 'C0':
      return 'THREE FAMILIES'
    case 'C1':
      return 'OVER SIX FAMILIES WITHOUT STORES'
    case 'C2':
      return 'FIVE TO SIX FAMILIES'
    case 'C3':
      return 'FOUR FAMILIES'
    case 'C4':
      return 'OLD LAW TENEMENT'
    case 'C5':
      return 'CONVERTED DWELLINGS OR ROOMING HOUSE'
    case 'C6':
      return 'WALK-UP COOPERATIVE'
    case 'C7':
      return 'WALK-UP APT. OVER SIX FAMILIES WITH STORES'
    case 'C8':
      return 'WALK-UP CO-OP; CONVERSION FROM LOFT/WAREHOUSE'
    case 'C9':
      return 'GARDEN APARTMENTS'
    case 'CM':
      return 'MOBILE HOMES/TRAILER PARKS'
    case 'D0':
      return 'ELEVATOR CO-OP; CONVERSION FROM LOFT/WAREHOUSE'
    case 'D1':
      return 'ELEVATOR APT; SEMI-FIREPROOF WITHOUT STORES'
    case 'D2':
      return 'ELEVATOR APT; ARTISTS IN RESIDENCE'
    case 'D3':
      return 'ELEVATOR APT; FIREPROOF WITHOUT STORES'
    case 'D4':
      return 'ELEVATOR COOPERATIVE'
    case 'D5':
      return 'ELEVATOR APT; CONVERTED'
    case 'D6':
      return 'ELEVATOR APT; FIREPROOF WITH STORES'
    case 'D7':
      return 'ELEVATOR APT; SEMI-FIREPROOF WITH STORES'
    case 'D8':
      return 'ELEVATOR APT; LUXURY TYPE'
    case 'D9':
      return 'ELEVATOR APT; MISCELLANEOUS'
    case 'E1':
      return 'FIREPROOF WAREHOUSE'
    case 'E2':
      return 'CONTRACTORS WAREHOUSE'
    case 'E3':
      return 'SEMI-FIREPROOF WAREHOUSE'
    case 'E4':
      return 'METAL FRAME WAREHOUSE'
    case 'E7':
      return 'SELF-STORAGE WAREHOUSES'
    case 'E9':
      return 'MISCELLANEOUS WAREHOUSE'
    case 'F1':
      return 'FACTORY; HEAVY MANUFACTURING - FIREPROOF'
    case 'F2':
      return 'FACTORY; SPECIAL CONSTRUCTION - FIREPROOF'
    case 'F4':
      return 'FACTORY; INDUSTRIAL SEMI-FIREPROOF'
    case 'F5':
      return 'FACTORY; LIGHT MANUFACTURING'
    case 'F8':
      return 'FACTORY; TANK FARM'
    case 'F9':
      return 'FACTORY; INDUSTRIAL-MISCELLANEOUS'
    case 'G0':
      return 'GARAGE; RESIDENTIAL TAX CLASS 1'
    case 'G1':
      return 'ALL PARKING GARAGES'
    case 'G2':
      return 'AUTO BODY/COLLISION OR AUTO REPAIR'
    case 'G3':
      return 'GAS STATION WITH RETAIL STORE'
    case 'G4':
      return 'GAS STATION WITH SERVICE/AUTO REPAIR'
    case 'G5':
      return 'GAS STATION ONLY WITH/WITHOUT SMALL KIOSK'
    case 'G6':
      return 'LICENSED PARKING LOT'
    case 'G7':
      return 'UNLICENSED PARKING LOT'
    case 'G8':
      return 'CAR SALES/RENTAL WITH SHOWROOM'
    case 'G9':
      return 'MISCELLANEOUS GARAGE OR GAS STATION'
    case 'GU':
      return 'CAR SALES/RENTAL WITHOUT SHOWROOM'
    case 'HB':
      return 'BOUTIQUE: 10-100 ROOMS, W/LUXURY FACILITIES, THEMED, STYLISH, W/FULL SVC ACCOMMODATIONS'
    case 'HH':
      return 'HOSTELS- BED RENTALS IN DORMITORY-LIKE SETTINGS W/SHARED ROOMS & BATHROOMS'
    case 'HR':
      return 'SRO- 1 OR 2 PEOPLE HOUSED IN INDIVIDUAL ROOMS IN MULTIPLE DWELLING AFFORDABLE HOUSING'
    case 'HS':
      return 'EXTENDED STAY/SUITE: AMENITIES SIMILAR TO APT; TYPICALLY CHARGE WEEKLY RATES & LESS EXPENSIVE THAN FULL-SERVICE HOTEL'
    case 'H1':
      return 'LUXURY HOTEL'
    case 'H2':
      return 'FULL SERVICE HOTEL'
    case 'H3':
      return 'LIMITED SERVICE; MANY AFFILIATED WITH NATIONAL CHAIN'
    case 'H4':
      return 'MOTEL'
    case 'H5':
      return 'HOTEL; PRIVATE CLUB, LUXURY TYPE'
    case 'H6':
      return 'APARTMENT HOTEL'
    case 'H7':
      return 'APARTMENT HOTEL - COOPERATIVELY OWNED'
    case 'H8':
      return 'DORMITORY'
    case 'H9':
      return 'MISCELLANEOUS HOTEL'
    case 'I1':
      return 'HOSPITAL, SANITARIUM, MENTAL INSTITUTION'
    case 'I2':
      return 'INFIRMARY'
    case 'I3':
      return 'DISPENSARY'
    case 'I4':
      return 'HOSPITAL; STAFF FACILITY'
    case 'I5':
      return 'HEALTH CENTER, CHILD CENTER, CLINIC'
    case 'I6':
      return 'NURSING HOME'
    case 'I7':
      return 'ADULT CARE FACILITY'
    case 'I9':
      return 'MISCELLANEOUS HOSPITAL, HEALTH CARE FACILITY'
    case 'J1':
      return 'THEATRE; ART TYPE LESS THAN 400 SEATS'
    case 'J2':
      return 'THEATRE; ART TYPE MORE THAN 400 SEATS'
    case 'J3':
      return 'MOTION PICTURE THEATRE WITH BALCONY'
    case 'J4':
      return 'LEGITIMATE THEATRE, SOLE USE'
    case 'J5':
      return 'THEATRE IN MIXED-USE BUILDING'
    case 'J6':
      return 'TELEVISION STUDIO'
    case 'J7':
      return 'OFF BROADWAY TYPE THEATRE'
    case 'J8':
      return 'MULTIPLEX PICTURE THEATRE'
    case 'J9':
      return 'MISCELLANEOUS THEATRE'
    case 'K1':
      return 'ONE STORY RETAIL BUILDING'
    case 'K2':
      return 'MULTI-STORY RETAIL BUILDING (2 OR MORE)'
    case 'K3':
      return 'MULTI-STORY DEPARTMENT STORE'
    case 'K4':
      return 'PREDOMINANT RETAIL WITH OTHER USES'
    case 'K5':
      return 'STAND-ALONE FOOD ESTABLISHMENT'
    case 'K6':
      return 'SHOPPING CENTER WITH OR WITHOUT PARKING'
    case 'K7':
      return 'BANKING FACILITIES WITH OR WITHOUT PARKING'
    case 'K8':
      return "BIG BOX RETAIL: NOT AFFIXED & STANDING ON OWN LOT W/PARKING, E.G. COSTCO & BJ'S"
    case 'K9':
      return 'MISCELLANEOUS STORE BUILDING'
    case 'L1':
      return 'LOFT; OVER 8 STORIES (MID MANH. TYPE)'
    case 'L2':
      return 'LOFT; FIREPROOF AND STORAGE TYPE WITHOUT STORES'
    case 'L3':
      return 'LOFT; SEMI-FIREPROOF'
    case 'L8':
      return 'LOFT; WITH RETAIL STORES OTHER THAN TYPE ONE'
    case 'L9':
      return 'MISCELLANEOUS LOFT'
    case 'M1':
      return 'CHURCH, SYNAGOGUE, CHAPEL'
    case 'M2':
      return 'MISSION HOUSE (NON-RESIDENTIAL)'
    case 'M3':
      return 'PARSONAGE, RECTORY'
    case 'M4':
      return 'CONVENT'
    case 'M9':
      return 'MISCELLANEOUS RELIGIOUS FACILITY'
    case 'N1':
      return 'ASYLUM'
    case 'N2':
      return 'HOME FOR INDIGENT CHILDREN, AGED, HOMELESS'
    case 'N3':
      return 'ORPHANAGE'
    case 'N4':
      return 'DETENTION HOUSE FOR WAYWARD GIRLS'
    case 'N9':
      return 'MISCELLANEOUS ASYLUM, HOME'
    case 'O1':
      return 'OFFICE ONLY - 1 STORY'
    case 'O2':
      return 'OFFICE ONLY 2 - 6 STORIES'
    case 'O3':
      return 'OFFICE ONLY 7 - 19 STORIES'
    case 'O4':
      return 'OFFICE ONLY WITH OR WITHOUT COMM - 20 STORIES OR MORE'
    case 'O5':
      return 'OFFICE WITH COMM - 1 TO 6 STORIES'
    case 'O6':
      return 'OFFICE WITH COMM 7 - 19 STORIES'
    case 'O7':
      return 'PROFESSIONAL BUILDINGS/STAND ALONE FUNERAL HOMES'
    case 'O8':
      return 'OFFICE WITH APARTMENTS ONLY (NO COMM)'
    case 'O9':
      return 'MISCELLANEOUS AND OLD STYLE BANK BLDGS.'
    case 'P1':
      return 'CONCERT HALL'
    case 'P2':
      return 'LODGE ROOM'
    case 'P3':
      return 'YWCA, YMCA, YWHA, YMHA, PAL'
    case 'P4':
      return 'BEACH CLUB'
    case 'P5':
      return 'COMMUNITY CENTER'
    case 'P6':
      return 'AMUSEMENT PLACE, BATH HOUSE, BOAT HOUSE'
    case 'P7':
      return 'MUSEUM'
    case 'P8':
      return 'LIBRARY'
    case 'P9':
      return 'MISCELLANEOUS INDOOR PUBLIC ASSEMBLY'
    case 'Q1':
      return 'PARKS/RECREATION FACILTY'
    case 'Q2':
      return 'PLAYGROUND'
    case 'Q3':
      return 'OUTDOOR POOL'
    case 'Q4':
      return 'BEACH'
    case 'Q5':
      return 'GOLF COURSE'
    case 'Q6':
      return 'STADIUM, RACE TRACK, BASEBALL FIELD'
    case 'Q7':
      return 'TENNIS COURT'
    case 'Q8':
      return 'MARINA, YACHT CLUB'
    case 'Q9':
      return 'MISCELLANEOUS OUTDOOR RECREATIONAL FACILITY'
    case 'RA':
      return 'CULTURAL, MEDICAL, EDUCATIONAL, ETC.'
    case 'RB':
      return 'OFFICE SPACE'
    case 'RC':
      return 'MIXED COMMERCIAL/CONDOMINIUM'
    case 'RD':
      return 'MIXED RESIDENTIAL CONDO BUILDING'
    case 'RG':
      return 'INDOOR PARKING'
    case 'RH':
      return 'HOTEL/BOATEL'
    case 'RK':
      return 'RETAIL SPACE'
    case 'RP':
      return 'OUTDOOR PARKING'
    case 'RR':
      return 'CONDOMINIUM RENTALS'
    case 'RS':
      return 'NON-BUSINESS STORAGE SPACE'
    case 'RT':
      return 'TERRACES/GARDENS/CABANAS'
    case 'RW':
      return 'WAREHOUSE/FACTORY/INDUSTRIAL'
    case 'RM':
      return 'MIXED RESIDENTIAL/COMMERICIAL'
    case 'R0':
      return 'SPECIAL CONDOMINIUM BILLING LOT'
    case 'R1':
      return 'CONDO; RESIDENTIAL UNIT IN 2-10 UNIT BLDG.'
    case 'R2':
      return 'CONDO; RESIDENTIAL UNIT IN WALK-UP BLDG.'
    case 'R3':
      return 'CONDO; RESIDENTIAL UNIT IN 1-3 STORY BLDG.'
    case 'R4':
      return 'CONDO; RESIDENTIAL UNIT IN ELEVATOR BLDG.'
    case 'R5':
      return 'MISCELLANEOUS COMMERCIAL'
    case 'R6':
      return 'CONDO; RESID.UNIT OF 1-3 UNIT BLDG-ORIG CLASS 1'
    case 'R7':
      return 'CONDO; COMML.UNIT OF 1-3 UNIT BLDG-ORIG CLASS 1'
    case 'R8':
      return 'CONDO; COMML.UNIT OF 2-10 UNIT BLDG.'
    case 'R9':
      return 'CO-OP WITHIN A CONDOMINIUM'
    case 'S0':
      return 'PRIMARILY 1 FAMILY WITH 2 STORES OR OFFICES'
    case 'S1':
      return 'PRIMARILY 1 FAMILY WITH 1 STORE OR OFFICE'
    case 'S2':
      return 'PRIMARILY 2 FAMILY WITH 1 STORE OR OFFICE'
    case 'S3':
      return 'PRIMARILY 3 FAMILY WITH 1 STORE OR OFFICE'
    case 'S4':
      return 'PRIMARILY 4 FAMILY WITH 1 STORE OROFFICE'
    case 'S5':
      return 'PRIMARILY 5-6 FAMILY WITH 1 STORE OR OFFICE'
    case 'S9':
      return 'SINGLE OR MULTIPLE DWELLING WITH STORES OR OFFICES'
    case 'T1':
      return 'AIRPORT, AIRFIELD, TERMINAL'
    case 'T2':
      return 'PIER, DOCK, BULKHEAD'
    case 'T9':
      return 'MISCELLANEOUS TRANSPORTATION FACILITY'
    case 'U0':
      return 'UTILITY COMPANY LAND AND BUILDING'
    case 'U1':
      return 'BRIDGE, TUNNEL, HIGHWAY'
    case 'U2':
      return 'GAS OR ELECTRIC UTILITY'
    case 'U3':
      return 'CEILING RAILROAD'
    case 'U4':
      return 'TELEPHONE UTILITY'
    case 'U5':
      return 'COMMUNICATION FACILITY OTHER THAN TELEPHONE'
    case 'U6':
      return 'RAILROAD - PRIVATE OWNERSHIP'
    case 'U7':
      return 'TRANSPORTATION - PUBLIC OWNERSHIP'
    case 'U8':
      return 'REVOCABLE CONSENT'
    case 'U9':
      return 'MISCELLANEOUS UTILITY PROPERTY'
    case 'V0':
      return 'ZONED RESIDENTIAL; NOT MANHATTAN'
    case 'V1':
      return 'ZONED COMMERCIAL OR MANHATTAN RESIDENTIAL'
    case 'V2':
      return 'ZONED COMMERCIAL ADJACENT TO CLASS 1 DWELLING: NOT MANHATTAN'
    case 'V3':
      return 'ZONED PRIMARILY RESIDENTIAL; NOT MANHATTAN'
    case 'V4':
      return 'POLICE OR FIRE DEPARTMENT'
    case 'V5':
      return 'SCHOOL SITE OR YARD'
    case 'V6':
      return 'LIBRARY, HOSPITAL OR MUSEUM'
    case 'V7':
      return 'PORT AUTHORITY OF NEW YORK AND NEW JERSEY'
    case 'V8':
      return 'NEW YORK STATE OR US GOVERNMENT'
    case 'V9':
      return 'MISCELLANEOUS VACANT LAND'
    case 'W1':
      return 'PUBLIC ELEMENTARY, JUNIOR OR SENIOR HIGH'
    case 'W2':
      return 'PAROCHIAL SCHOOL, YESHIVA'
    case 'W3':
      return 'SCHOOL OR ACADEMY'
    case 'W4':
      return 'TRAINING SCHOOL'
    case 'W5':
      return 'CITY UNIVERSITY'
    case 'W6':
      return 'OTHER COLLEGE AND UNIVERSITY'
    case 'W7':
      return 'THEOLOGICAL SEMINARY'
    case 'W8':
      return 'OTHER PRIVATE SCHOOL'
    case 'W9':
      return 'MISCELLANEOUS EDUCATIONAL FACILITY'
    case 'Y1':
      return 'FIRE DEPARTMENT'
    case 'Y2':
      return 'POLICE DEPARTMENT'
    case 'Y3':
      return 'PRISON, JAIL, HOUSE OF DETENTION'
    case 'Y4':
      return 'MILITARY AND NAVAL INSTALLATION'
    case 'Y5':
      return 'DEPARTMENT OF REAL ESTATE'
    case 'Y6':
      return 'DEPARTMENT OF SANITATION'
    case 'Y7':
      return 'DEPARTMENT OF PORTS AND TERMINALS'
    case 'Y8':
      return 'DEPARTMENT OF PUBLIC WORKS'
    case 'Y9':
      return 'DEPARTMENT OF ENVIRONMENTAL PROTECTION'
    case 'Z0':
      return 'TENNIS COURT, POOL, SHED, ETC.'
    case 'Z1':
      return 'COURT HOUSE'
    case 'Z2':
      return 'PUBLIC PARKING AREA'
    case 'Z3':
      return 'POST OFFICE'
    case 'Z4':
      return 'FOREIGN GOVERNMENT'
    case 'Z5':
      return 'UNITED NATIONS'
    case 'Z7':
      return 'EASEMENT'
    case 'Z8':
      return 'CEMETERY'
    case 'Z9':
      return 'OTHER MISCELLANEOUS'
    default:
      return '(unknown)'
  }
}
