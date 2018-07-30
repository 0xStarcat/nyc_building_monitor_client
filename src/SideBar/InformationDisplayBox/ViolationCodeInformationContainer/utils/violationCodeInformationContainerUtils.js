import React from 'react'
import ViolationCodeInformation from '../ViolationCodeInformation'

export const getViolationCodeInformation = (code, index) => {
  switch (code) {
    case 'SECTION 27-2005':
      return (
        <ViolationCodeInformation
          key={`${code}-${index}`}
          title="§27–2005 Duties of owner."
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        >
          <p>(summarized)</p>
          <li>
            The owner is responsible for keeping the premises in good repair, except in the areas agreed to by the
            tenant and the owner in the lease.
          </li>
          <li>
            The owner will give notice to the tenants before doing work that could interrupt heat, hot water, cold
            water, electricity, gas for more than two hours. If not given notice in person, a sign must be posted in
            English and Spanish 24 hours in advanced of the work in a prominent location and the sign must say when the
            work starts and ends.
          </li>
          <li>
            The landlord must post an HPD approved sign that instructs tenants what to do in the event of a gas leak.
          </li>
        </ViolationCodeInformation>
      )
    case 'SECTION 27-2010':
      return (
        <ViolationCodeInformation
          key={`${code}-${index}`}
          title="§27–2010 Cleaning of roofs, yards, courts and other open spaces."
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        >
          <p>
            The owner of a dwelling containing two or more dwelling units, and the occupant of a single family dwelling
            shall keep the roof, yard, courts and other open spaces clean and free from dirt, filth, garbage or other
            offensive material.
          </p>
        </ViolationCodeInformation>
      )
    case 'SECTION 27-2011':
      return (
        <ViolationCodeInformation
          key={`${code}-${index}`}
          title="§27–2011 Cleaning of interior shared space."
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        >
          <p>The owner of a dwelling shall maintain the public parts in a clean and sanitary condition.</p>
        </ViolationCodeInformation>
      )
    case 'SECTION 27-2012':
      return (
        <ViolationCodeInformation
          title="§27–2012 Cleaning of interior of dwelling units."
          key={`${code}-${index}`}
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        >
          <p>
            a. The occupant of a dwelling shall maintain the dwelling unit which he or she occupies and controls in a
            clean and sanitary condition except as provided in subdivision b of this section.
          </p>
          <p>
            b. The owner of all rooming units in a rooming house or an entire multiple dwelling used for single room
            occupancy, or the person in control of an apartment containing rooming units, shall clean any such unit
            before any change in occupancy and at least once a week during the period of occupancy and shall at all
            times maintain the same in a clean and sanitary condition.
          </p>
        </ViolationCodeInformation>
      )
    case 'SECTION 27-2026':
      return (
        <ViolationCodeInformation
          key={`${code}-${index}`}
          title="§27–2026 Maintenance of sewer connections and plumbing fixtures."
          source="https://www1.nyc.gov/assets/buildings/pdf/HousingMaintenanceCode.pdf"
        >
          <p>
            TThe owner of a dwelling shall properly maintain and keep in good repair the plumbing and drainage system,
            including water closets, toilets, sinks and other fixtures.
          </p>
        </ViolationCodeInformation>
      )
    case 'SECTION 27-2027':
      return (
        <ViolationCodeInformation
          key={`${code}-${index}`}
          title="§27–2027 Drainage of roofs and court yards."
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
        <ViolationCodeInformation key={`${code}-${index}`}>
          <p>
            No information provided yet. Please help contribute to this research by submitting a{' '}
            <a href="https://github.com/0xStarcat/nyc_building_monitor_client" target="_blank">
              pull request in the code repository.
            </a>
          </p>
        </ViolationCodeInformation>
      )
  }
}
