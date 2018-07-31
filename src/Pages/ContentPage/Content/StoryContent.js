import React from 'react'

import './style.scss'

const StoryContent = () => {
  return (
    <div className="text-content">
      <div className="content-title">
        <h5>The story behind this project.</h5>
      </div>
      <div className="content-body">
        <p>
          This project began after a personal experience threw my living situation into disarray and set me on a path of
          lies, revenge, and knowledge.
        </p>
        <h6>Losing the gas</h6>
        <p>
          At the end of January, 2018, with temperatures outside consistently cold and freezing, a building inspector
          came by my apartment. He looked around the common areas and into each unit, and then left. I went about my day
          and later, when I went to turn on the stove to cook some food that I had just prepared, the stovetop wouldn’t
          light. I called the landlord and got the news that the gas in the entire building had just been shut off.
        </p>
        <p>
          The ensuing days were full of stress and anxiety - we had no hot water to shower with, no heat keep warm at
          night, and no stove to cook on. We didn’t know who could solve our issues - the landlord? The city? A lawyer?
          We demanded a solution from the landlord and thankfully, they replaced the hot water heaters - which ran on
          gas - with electric ones and they gave us space-heaters and electric stovetops within a few days. They knew
          that not providing these things would put them in violation of the lease.
        </p>
        <p>
          I had many questions. Why did this happen in the first place? Why did it have to happen so suddenly in the
          middle of winter? And when will the gas return?
        </p>
        <h6>The lying landlord</h6>
        <p>
          The landlord’s story was that the building department had told them they needed to install a sprinkler system
          in the factory on the 1st floor to get the gas back. They said that they thought someone was probably trying
          to force them out of the area since it’s a rapidly developing neighborhood in Williamsburg, and it was
          suspicious that this was never an issue in the past decade for the building.
        </p>
        <p>
          I was naive and believed their story. My head was full of anger from having my living situation destabilized
          by outside forces. I had just left my job, and I was willing to do whatever I could to fight anything that
          threatened my tenuous stability. I started my journey in the public data files of the NYC open data portal to
          learn more about this conspiracy. I wanted to know if I could find evidence of a bad actor using violations as
          a wedge to push owners to sell in gentrifying areas like my neighborhood.
        </p>
        <p>
          Full disclosure - I am not a native of Williamsburg or NYC and I have privileges that some residents of
          Williamsburg do not. With that said, I cannot afford to live in one of the new developments that have sprung
          up on my block in recent years and I do NOT eat Quinoa salad or call the cops on people.
        </p>
        <p>
          I spent countless days scraping data from the NYC databases, running statistical formulas on it to find any
          city-wide correlation between building violations, building sales, and the gentrifying neighborhoods they
          occured in. I came up with nothing.
        </p>
        <p>
          But I needed someone to blame for my misery. In the months since, two of my roommates moved out and had to be
          replaced. I couldn't cook my favorite meals anymore because of the lack of a working oven. This issue was
          becoming a real pain on top of my normal day to day burdens.
        </p>
        <h6>Finding the truth</h6>
        <p>
          Then, one day, I noticed an essential detail that I had somehow missed from the beginning. In my fervor to
          blow the lid on the story, I never actually read what the building department's public description of the
          violation said. I'm thankful to this day that NYC has decided to make all of this data public, because what I
          learned changed my perspective on the situation entirely.
        </p>
        <p>
          The violation described the discovery of an illegal gas connection. THAT was why we lost gas - not because of
          the sprinkler system. The landlord decided to hide the fact that they were operating an illegal gas line from
          us the whole time.
        </p>
        <p>
          On top of this lie, I saw more violations piling up since that January for their failure to certify that they
          had fixed the violation. Not only did they hide their actions, but they weren’t taking the steps they needed
          to to put the building in compliance. Seven months later, at the time of this writing, I still don’t have gas.
          Nor is my situation stable enough yet to move.
        </p>
        <h6>Knowledge is power</h6>
        <p>
          I learned that not only was my gas probably never returning, despite the vague assurances of the landlord, but
          the landlord was probably planning on getting rid of the property since they didn’t care about putting it into
          compliance. I was now informed, aware, and empowered as a tenant.
        </p>
        <p>
          I knew my time at this building was probably not long for this world and I would need to get ready to move in
          the near future. I also had the leverage I needed to renegotiate my rent when it came time to re-sign my
          lease. Knowing that the landlord didn’t want to go through the trouble of finding all new tenants for a place
          that had this many issues - issues they weren’t trying to fix - gave me the power to lower my rent by a couple
          hundred dollars a month.
        </p>
        <h6>Conclusion</h6>
        <p>
          I built the NYC Building Monitor to help people learn more about their building and the context their living
          in like I did. Without this knowledge, landlords can exploit, mislead, or neglect their responsibilities to
          tenants in any number of ways. Holding them accountable, as well as holding the city institutions that should
          be working for us accoutable, isn’t an easy task without the right knowledge. If you’re looking for a new
          place to live or trying to make sense of what’s going on with your current situation, I hope this tool can
          help you learn about what what your rights are and what your building's situation is.
        </p>
      </div>
    </div>
  )
}

export default StoryContent
