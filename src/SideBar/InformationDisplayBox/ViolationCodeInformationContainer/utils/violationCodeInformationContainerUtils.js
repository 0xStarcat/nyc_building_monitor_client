import React from 'react'
import ViolationCodeInformation from '../ViolationCodeInformation'

export const getViolationCodeInformation = (code, index) => {
  switch (code) {
    case 'SECTION 27-2026':
      return (
        <ViolationCodeInformation
          title="§27–2027 Drainage of roofs and court yards."
          key={`${code}-${index}`}
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        >
          <p>
            a. The owner of a dwelling shall grade and maintain the grading of all roofs, terraces, shafts, courts,
            yards, and other open spaces on the lot, and shall provide and maintain unobstructed drainage from these
            areas and spaces through a drain connected to a street storm-water main or combined sewer and street
            storm-water main. In the absence of a street storm-water main or combined sewer and street storm-water main,
            the department may permit the storm water CHAPTER 2 HOUSING MAINTENANCE CODE from such areas to drain into a
            street gutter leading to a natural channel, water course, or dry well.
          </p>
          <p>
            b. The owner of a dwelling shall provide and maintain drainage from all roofs to carry off storm water, to
            prevent it from dripping to the ground, or from causing dampness in walls, ceilings, and open spaces.
          </p>
          <p>
            c. The department may require the owner of a dwelling to surface shafts, courts, yards, and other open
            spaces on the lot with concrete, and to pitch the surfaces of such areas towards a sewer-connected drain or
            other adequate drainage system, except that, with respect to private dwellings, the department may permit
            the surfacing of such areas with bituminous aggregate or other similar material.
          </p>
          <p>
            d. The owner of a dwelling may plant grass, sod, shrubs, trees and other vegetation in yards and courts,
            unless the department orders its removal because in its opinion such vegetation interferes with proper
            drainage, light, ventilation, or egress.
          </p>
        </ViolationCodeInformation>
      )

    default:
      return (
        <ViolationCodeInformation
          content="hi"
          key={`${code}-${index}`}
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        />
      )
  }
}
