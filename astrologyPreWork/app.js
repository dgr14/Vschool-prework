//getDate() returns the day of the month from 1-31
//getMonth() returns the month from 0-11
//setDate() sets the day of the month of a date object
//setMonth() Sets the month of a date object

var userDate = document.getElementsByName("userDate")
var buttonInfo = document.getElementById("enterDate")
var divContainer = document.getElementById("content")

buttonInfo.addEventListener("click", () => {
    var getDate = userDate[0].value
    console.log(getDate)
    var newDate = getDate.slice(5)
    console.log(newDate)
    var day = Number(newDate.slice(3, 6))
    var month = Number(newDate.slice(0, 2))
    divContainer.innerHTML = ``;
    console.log(month)
    console.log(day)
    if (day < 0 || month < 0 || day > 31 || month > 12) {
        alert('You have entered an incorrect date!')
    } else {
        if (month === 01 && day >= 20 || month === 02 && day <= 18) {
            console.log('Aquarius')
            var aquarius = document.createElement("p");
            aquarius.id = "aquariusStyle"
            aquarius.textContent = "Aquarians present themselves in one of two ways. One on hand, you'll see someone who is shy, and quiet. On the other, an Aquarian can be boisterous, eccentric, and energetic. Both are deep thinkers with a love of helping others. Highly intellectual, this is a sign of fierce independence that prizes intuition tempered with logic. Both personality types have an uncanny ability to see both sides of an argument without prejudice, making them excellent problem-solvers. While very much attuned to the energies around them, Aquarians have a deep need to take time out alone and away to rejuvenate themselves. The keyword for this sign is imagination. The Aquarian can see a world of possibilities even when there appears to be none."
            divContainer.appendChild(aquarius)
        

        } else if (month === 2 && day >= 19 || month === 03 && day <= 20) {
            console.log('Pisces')
            var pisces = document.createElement("p");
            pisces.id = "piscesStyle"
            pisces.textContent = "Understanding is a most appropriate keyword for this gentle, affectionate sign. Easygoing and generally accepting of others around them, Pisceans are often found in the company of a variety of different personalities. Their willingness to give of themselves emotionally lends to an aura of quiet empathy. A Pisces is comforting to be around. While not likely to be the leader, this sign's presence is strong and vibrant in any cause they put their hearts into."
            divContainer.appendChild(pisces)
            

        } else if (month === 03 && day >= 21 || month === 04 && day <= 19) {
            console.log('Aries')
            var aries = document.createElement("p");
            aries.id = "Style"
            aries.textContent = "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life."
            divContainer.appendChild(aries)
            

        } else if (month === 04 && day >= 20 || month === 05 && day <= 20) {
            console.log('Taurus')
            var taurus = document.createElement("p");
            taurus.id = "Style"
            taurus.textContent = "Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart."
            divContainer.appendChild(taurus)
            

        } else if (month === 05 && day >= 21 || month === 06 && day <= 20) {
            console.log('Gemini')
            var gemini = document.createElement("p");
            gemini.id = "Style"
            gemini.textContent = "Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs."
            divContainer.appendChild(gemini)
            

        } else if (month === 06 && day >= 21 || month === 07 && day <= 22) {
            console.log('Cancer')
            var cancer = document.createElement("p");
            cancer.id = "Style"
            cancer.textContent = "Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life. Most Cancers have been called psychic at some point, and with good reason—Cancer can often intuit relationships, ideas, and motivations before anyone has actually spoken. That can make for challenging interactions with this sign—Cancer hates small talk, especially when it contains white lies (like saying, 'How nice to see you!' when it's clear that both parties would rather avoid each other). That's why social gatherings can be overwhelming for Cancers. They'd much rather spend time in small groups where everyone is on the same page."
            divContainer.appendChild(cancer)
            

        } else if (month === 07 && day >= 23 || month === 08 && day <= 22) {
            console.log('Leo')
            var leo = document.createElement("p");
            leo.id = "Style"
            leo.textContent = "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader."
            divContainer.appendChild(leo)
            

        } else if (month === 08 && day >= 23 || month === 09 && day <= 22) {
            console.log('Virgo')
            var virgo = document.createElement("p");
            virgo.id = "Style"
            virgo.textContent = "Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure. Virgo has a rich inner life, and can sometimes seem shy at first meeting. A Virgo won't spill secrets right away, and it's important to earn a Virgo's trust. But once you do, that Virgin will be a friend for life. And if you think that you're dating a shy Virgo, trust that those walls will fall down in the bedroom. One of the most passionate signs, Virgos specialize at connecting to their physicality, and this earth sign loves and celebrates physical connection with their partner."
            divContainer.appendChild(virgo)
            

        } else if (month === 09 && day >= 23 || month === 10 && day <= 22) {
            console.log('Libra')
            var libra = document.createElement("p");
            libra.id = "Style"
            libra.textContent = "Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count."
            divContainer.appendChild(libra)
            

        } else if (month === 10 && day >= 23 || month === 11 && day <= 21) {
            console.log('Scorpio')
            var scorpio = document.createElement("p");
            scorpio.id = "Style"
            scorpio.textContent = "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty. Because of all of these traits, a Scorpio can seem intimidating and somewhat closed off to those who don't know them well. But what people don't realize is that even though Scorpio may seem brusque, as a water sign, they also are very in tune with their emotions, and sometimes may find themselves caught up in their feelings."
            divContainer.appendChild(scorpio)
            

        } else if (month === 11 && day >= 22 || month === 12 && day <= 21) {
            console.log('Sagittarius')
            var sagitarrius = document.createElement("p");
            sagitarrius.id = "Style"
            sagitarrius.textContent = "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie."
            divContainer.appendChild(sagitarrius)
            

        } else if (month === 12 && day >= 22 || month === 01 && day <= 19) {
            console.log('Capricorn')
            var capricorn = document.createElement("p");
            capricorn.id = "Style"
            capricorn.textContent = "Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave. Natural rule-followers, Capricorns thrive on order and love strict rules, hierarchies, and set ways to do things. Can a Capricorn think outside the box? Yes, they can, but they prefer when they have strict boundaries to constrain against—free reign can make them feel paralyzed by choice. Capricorns are great at climbing the corporate ladder, and especially adept at making (and investing) money. Capricorns love family, and put a lot of stock in traditions. A Capricorn might stress themselves out trying to do everything perfectly—a Capricorn may feel like they must present a home-cooked meal every day, and would never admit to doing drive-thru or takeout. Capricorns believe presentation is everything, and their homes are usually Insta-worthy. A Capricorn sometimes is overly focused on what things look like, instead of how things feel, which could cause them to feel stifled and unhappy."
            divContainer.appendChild(capricorn)

        } else {
            console.log('This Date is incorrect')
        }

    }
}
)

/*  Aquarius - 01/20 - 02/18
    Pisces - 02/19 - 03/20
    Aries - 03/21 - 04/19
    Taurus - 04/20 - 05/20
    Gemini - 05/21 - 06/20
    Cancer - 06/21 - 07/22
    Leo - 07/23 - 08/22
    Virgo - 08/23 - 09/22
    Libra - 09/23 - 10/22
    Scorpio - 10/23 - 11/21
    Sagittarius - 11/22 - 12/21
    Capricorn - 12/22 - 01/19

*/

/*
if (month === 01 || month === 02 && day >= 20 || day <= 18) {
    console.log('Aquarius')
} else if (month === 02 || month === 03 && day >= 19 || day <= 20) {
    if(month === 04){
        console.log('Aries')
    } else {
        console.log('Pisces')
    }

} else if (month === 03 || month === 04 && day >= 21 || day <= 19) {
    console.log('Aries')

} else if (month === 04 || month === 05 && day >= 20 || day <= 20) {
    console.log('Taurus')

} else if (month === 05 || month === 06 && day >= 21 || day <= 20) {
    console.log('Gemini')

} else if (month === 06 || month === 07 && day >= 21 || day <= 20) {
    console.log('Cancer')

} else if (month === 07 || month === 08 && day >= 23 || day <= 22) {
    console.log('Leo')

} else if (month === 08 || month === 09 && day >= 23 || day <= 22) {
    console.log('Virgo')

} else if (month === 09 || month === 10 && day >= 23 || day <= 22) {
    console.log('Libra')

} else if (month === 10 || month === 11 && day >= 23 || day <= 21) {
    console.log('Scorpio')

} else if (month === 11 || month === 12 && day >= 22 || day <= 19) {
    console.log('Sagittarius')
} else {
    console.log('Capricorn')
}
})

*/
