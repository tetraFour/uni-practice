import React from "react";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import HelpItem from "./HelpList";

import "./style.sass";

const helpInfo = [
  {
    id: 0,
    title: "Первый пункт",
    content:
      "Sit ex labore illo scelerisque mollis anim dolore soluta fusce elit nisi, eiusmod occaecat ac iure earum mus congue hic feugiat nisi quae dis, similique.",
  },
  {
    id: 1,
    title: "Второй пункт",
    content:
      "Sit ex labore illo scelerisque mollis anim dolore soluta fusce elit nisi, eiusmod occaecat ac iure earum mus congue hic feugiat nisi quae dis, similique.",
  },
  {
    id: 2,
    title: "Третий пункт",
    content:
      "Sit ex labore illo scelerisque mollis anim dolore soluta fusce elit nisi, eiusmod occaecat ac iure earum mus congue hic feugiat nisi quae dis, similique.",
  },
];

const AdvicesAndHelps = () => {
  return (
    <section className="advices-and-helps-section">
      <div className="container">
        <div className="advices">
          <h3>Советы</h3>
          <Tabs>
            <TabList>
              <Tab>Первый совет</Tab>
              <Tab>Второй совет</Tab>
              <Tab>Третий совет</Tab>
            </TabList>

            <TabPanel>
              <p>
                Mario is a fictional character in the Mario video game
                franchise, owned by Nintendo and created by Japanese video game
                designer Shigeru Miyamoto. Serving as the company's mascot and
                the eponymous protagonist of the series, Mario has appeared in
                over 200 video games since his creation. Depicted as a short,
                pudgy, Italian plumber who resides in the Mushroom Kingdom, his
                adventures generally center upon rescuing Princess Peach from
                the Koopa villain Bowser. His younger brother and sidekick is
                Luigi.
              </p>
              <p>
                Luigi is a fictional character featured in video games and
                related media released by Nintendo. Created by prominent game
                designer Shigeru Miyamoto, Luigi is portrayed as the slightly
                younger but taller fraternal twin brother of Nintendo's mascot
                Mario, and appears in many games throughout the Mario franchise,
                often as a sidekick to his brother.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Luigi is a fictional character featured in video games and
                related media released by Nintendo. Created by prominent game
                designer Shigeru Miyamoto, Luigi is portrayed as the slightly
                younger but taller fraternal twin brother of Nintendo's mascot
                Mario, and appears in many games throughout the Mario franchise,
                often as a sidekick to his brother.
              </p>
              <p>
                Luigi is a fictional character featured in video games and
                related media released by Nintendo. Created by prominent game
                designer Shigeru Miyamoto, Luigi is portrayed as the slightly
                younger but taller fraternal twin brother of Nintendo's mascot
                Mario, and appears in many games throughout the Mario franchise,
                often as a sidekick to his brother.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Princess Peach is a character in Nintendo's Mario franchise.
                Originally created by Shigeru Miyamoto, Peach is the princess of
                the fictional Mushroom Kingdom, which is constantly under attack
                by Bowser. She often plays the damsel in distress role within
                the series and is the lead female. She is often portrayed as
                Mario's love interest and has appeared in Super Princess Peach,
                where she is the main playable character.
              </p>
              <p>
                Luigi is a fictional character featured in video games and
                related media released by Nintendo. Created by prominent game
                designer Shigeru Miyamoto, Luigi is portrayed as the slightly
                younger but taller fraternal twin brother of Nintendo's mascot
                Mario, and appears in many games throughout the Mario franchise,
                often as a sidekick to his brother.
              </p>
            </TabPanel>
          </Tabs>
        </div>
        <div className="helps">
          <h3>Помощь</h3>
          <ul className="helps-list">
            {helpInfo.map((help) => (
              <HelpItem
                title={help.title}
                content={help.content}
                key={help.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvicesAndHelps;
