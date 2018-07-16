import React from 'react'
import Layout from '../Layout'

import './style.scss'

const AboutPage = () => {
  return (
    <Layout>
      <div className="text-container">
        <h3>Background Story</h3>
        <p>
          Last winter, the department of buildings issued a violation on my 3-story apartment building located in
          Williamsburg, Brooklyn which resulted in the apartment losing gas, heat, hot water, and cooking in the middle
          of the winter.
        </p>
        <p>
          The building is owned by a Hasidic Jewish business and the first floor is a bread factory. The rent is
          $1000/month compared to the median rent of $1965.74 for the rest of my block-area.
        </p>
        <p>
          One of the requirements of the violation was that the owners needed to install a sprinkler system in the
          building. The owners told me that after owning the factory for over 20 years, this was never brought up in
          prior annual inspections. This requirement has led them to seek a new factory location and put the building up
          for sale.
        </p>
        <hr />
        <h3>My investigation</h3>
        <p>
          It seemed strange to me that this violation would occur at this particular time. This is a time when multiple
          6-7 story new apartment developments are springing up in my area. The streets are littered with construction
          vehicles every day and many new projects have begun since I moved in 2 years ago.
        </p>
        <p>
          Gentrification has been happening in Williamsburg for decades. My neighborhood is near Grand St which is the
          dividing line of North and South Williamsburg. South Williamsburg has been relatively sheltered from the
          effects of gentrification so far. For comparison, the block-area just south of me has a median rent of
          $1000.20 compared to my area's $1965.74.
        </p>
        <p>
          But maybe its time has come? I had to wonder if the NYC Department of Buildings could have any role in
          assisting the gentrification of neighborhoods in Brooklyn. I had to wonder how often this story could have
          played out in other parts of my borough.
        </p>
        <p>
          What if there is an agenda at play where for years, the department overlooks or ignores safety concerns until
          the neighborhood becomes targetted for development. Then, the department swoops in and issues what violations
          they can on the older buildings to force them to be sold?
        </p>
        <h3>My methods</h3>
        <p>
          Using the NYC Open Data portal, I've collected data on all of the violations issued by the NYC Department of
          Buildings and Housing Preservation and Development office. I also collected all of the 311 calls made to the
          DoB and HPD from people (the community) who wanted to have a building concern addressed. I collected data on
          all of the sales and new permits issued in Brooklyn as well.
        </p>
        <p>
          Using this data, I plan to deliver an interactive data story about every block in Brooklyn's experience from
          2011-2017. The story will draw on data that includes the change in income, rent, and racial makup from
          2011-2017, as well as the story of each violation, 311 call, sale, and new building permit during this time.
        </p>
        <h3>Current stage of progress</h3>
        <p>
          I'm in the process of analyzing these datasets to discover trends and correlations that will help me tell my
          story.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
