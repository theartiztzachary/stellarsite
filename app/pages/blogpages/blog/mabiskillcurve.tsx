import React from 'react';
import type { Route } from './+types/home';

import '../../../../csssheets/blogpagethemes/mabiblogtheme.css';

import PageHeader from '../../../components/pageheader.tsx';
import '../../../../csssheets/pageheader.css';
//import PageFooter from '../../components/pagefooter.tsx';
//import '../../../csssheets/pagefooter.css';
import BlogHeader from '../../../components/blogheader.tsx';
import '../../../../csssheets/blogheaderstyle.css';

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Stellar Sakura - Mabi's Skill Curve Problem" },
        { name: "description", content: "beep" },
    ];
};

//tags//
export const name = "Mabinogi's Skill Curve Problem";
export const tags = ['mabinogi', 'game development'];
export const id = 'mabiskillcurve';
export const routelink = '/blog/mabiskillcurve';
export const description = 'Placeholder description.'

export default function MabiSillCurve() {

    //beginning of "HTML" code//
    return (
        <>
            <PageHeader />
            <BlogHeader />

            <div className = "page_section">
                <h1>Mabinogi (NA)'s Skill Curve Problem</h1>
                <p>
                    In an age where 'traditional MMOs' are falling off the face of the gaming industry, it takes a lot
                    to keep players engaged. I won't go into exactly what I am defining a traditional MMO as, but think of
                    games like World of Warcraft or Everquest. 
                </p>

                <h3>What is a Skill Curve?</h3>
                <p>
                    A skill curve is, arguably, one of the core processes that makes a 'game' a game. If you have ever
                    played a game (or rather, a well designed game), you have experienced the gradual increase of difficulty
                    as you progress further in the game. This, in it's most basic form, is a skill curve. This is what
                    makes the continual play of a game interesting and engaging - as you master fundementals, something is
                    done to challenge your abilities, asking you to - I have to say it - git gud. 
                </p>
                <p>
                    The most basic and boring way to create a skill curve is to increase enemy stats. You can usually find
                    these in games that have some kind of player stat system that can be improved over time. As your
                    offensive stats increase, enemy defensive stats increase in tandem. Alone, this keeps the experience
                    rather flat, and the 'curve' in the skill curve can be lost. This is why you will often see these kinds
                    of skill curves add other twists to their combat systems, asking for you to adapt in some way to 
                    better handle said twists. The most basic example of this I can think of is Pokemon. At its core,
                    Pokemon's battle system is a basic stat check increase with some bonus twists to make it feel
                    interesting - type matchups, status effects, held items, etc. 
                </p>
                <p>
                    While traditional MMOs will usually incorporate some of these basic skill curve elements, they will also
                    add live play mechanics - dodging attacks, manipulating items, etc. If you currently play or have played
                    a traditional MMO, I'm sure you can think of some off the top of your head - things that turned boss
                    fights from pure stat stick checks into complex puzzles to be figured out. However, at the heart of these
                    MMOs still remains a core of a pure stat skill curve.
                </p>
                <p>
                    So, what is Mabinogi's skill curve like? It leans closer to traditional MMOs, so it has the blend of
                    stats and live play mechanics. However, beneath those layers, Mabinogi unfortunately has a rotten core
                    that it is built upon, and continues to drain players - on the North American server. Quick tangent.
                </p>

                <h4>The Cultural Difference of Grinding</h4>
                <p>
                    Get your head out of the gutter.
                </p>
                <p>
                    Before we go too much further on this point, I do want to bring up some important context for our
                    discussion. Mabinogi is a Korean MMO, developed by Koreans. It's 'home server' is the Korean server.
                    While I have a list of problems with Mabinogi - one of which is the purpose of this post - I do
                    conceed that quite a few of them stem from one thing - the cultural differences of MMO grinding between
                    Korea and North America.
                </p>
                <p>
                    Rather infamously at this point, Korea has a 'PC cafe' culture, where it is normal to go to your
                    closest internet cafe and just hang out there for hours, grinding away at your favorite game. We could
                    go on for hours about how this grind culture is reflective of Korean culture as a whole, but I am a
                    white trans guy who lives in the United States, and I am not the person to go too deeply into this
                    subject or comment on it past its existance.
                </p>
                <p>
                    The main reason I bring up this normalization of game grind culture in Korea is it impacts decisions
                    that the Mabinogi dev team makes in the direction the game takes. The unfortuante truth is that the same
                    changes that are positive or issue-solving in Korea are often detremental to the North American server.
                    I'll go over specifics thoughout this post, but the core takeaway from this tangent is the context that
                    the Korean server A) exists within a culture of game grinding and B) has a much higher player count
                    than the North American server. I want to make it CRYSTAL clear that I am speaking as a player on the
                    North American server specifically, who lives in the United States and therefore lives in a very 
                    different context than the developers and their major playerbase. While I think the problem that I
                    bring up here also affect the Korean server and the overall health of the game, the bottom line is I
                    do not have the personal perspective on how things are on the Korean server, so I cannot speak on that.
                    While we're at it, I want to remind you that I am ONE PLAYER, and I do not speak for the entire North
                    American server.
                </p>

                <h3>Problem One: The Drop Rate Skill Curve</h3>
                <p>
                    Okay, with that out of the way, let's begin with the first major problem of Mabinogi's broken skill
                    curve - drop rates. Yes, I know what you're saying - Zach, drop rates have nothing to do with skill
                    curve! And, yes, you're right. On a surface level, drop rates don't have anything to do with skill
                    curves. How many times can I say skill curves before it starts looking like an ethereal word.
                </p>
                <p>
                    The problem arises when drop rates get in the way of the skill curve. Mabinogi has a gear tier system.
                    Don't expect me to explain it to you, because it's kind of broken too, especially with the inclusion
                    of the Demolition/Ruination weapons that are exclusive to the North American server. In simplicity,
                    it's just a stat skill curve. As you progress into higher teir content, you need higher teir gear to
                    compete on the stat skill curve. Did I mention that North America has a much smaller player count than
                    Korea?
                </p>
                <p>
                    When I first started playing, there wasn't a very clear gear tier system. Outside of knowing the
                    precise numbers or what weapons can be given what upgrades, there wasn't a quick and fast way to say
                    that one piece of equipment was better than another. Then, a set of weapons was released - the Celtic
                    weapon series. Alright, cool! Let's go farm the materials needed to craft these weapons. So you'd run
                    a dungeon, get a few common mats, run another dungeon, get a few common mats, run another dungeon...
                </p>
                <p>
                    No problem so far, right?
                </p>
                <p>
                    Except you open up your inventory and check how many more mats you need, and you realize you're missing
                    a key component you need to finish the weapon. No worries! So you do another run, and another run, and
                    another run, and another run, and another, run...
                </p>
                <p>
                    I'm not saying I should be able to farm everything in a single two-hour session (I play Warframe, after
                    all!), but if it's been a whole week of multi-hour farming sessions with zero progress, that's a bit of
                    an issue. And, in terms of the Celtic weapons, this was back when running the dungeons where those
                    materials dropped was a real chore. And then new content that is released is usually balanced around the
                    idea that you have decent to maxed gear of the previous tier (we'll get into enchants and reforges
                    later). Mabi's drop tables work on what I call a 'dual roll' system - when you get a drop, the game first
                    rolls to see what <i>type</i> of drop you'll get, and then it rolls off of the actual drop table for that
                    type of drop. So for those rarer drops, you essentially have to get lucky twice in order to actually get
                    your drop. So if you struggle to clear the dungeon, and can't find people to run with you (which was more
                    common back then)...
                </p>
                <p>
                    Well, you could just buy things off the in-game market... right? Right???
                </p>

                <h3>Problem Two: The Market Skill Curve</h3>
                <p>
                    Oh if only things were that easy.
                </p>
                <p>
                    
                </p>

            </div>

            <div className = "date_area" >
                <p><b>Posted:</b> </p>
                <p><b>Last Edited:</b> </p>
            </div>
            {/* footer goes here */}
        </>
    );
}