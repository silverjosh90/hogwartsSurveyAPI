
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('houses').del(),

    // Inserts seed entries
    knex('houses').insert({
      name: 'Gryffindor',
      imageUrl: 'http://img08.deviantart.net/ccd3/i/2013/142/5/f/gryffindor_crest_by_geijvontaen-d4k3ji9.png',
      traits: 'Bravery, Nerve, Chivalry, Courage, Daring',
      quote: 'You belong in Gryffindor, where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart'
    }),
    knex('houses').insert({
      name: 'Ravenclaw'
      imageUrl: 'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=28324037',
      traits: 'Intelligence, Wit, Wisdom, Creativity, Originality, Individuality, Acceptance',
      quote: 'You belong in wise old Ravenclaw, if you\'ve a ready mind, where those of wit and learning, will always find their kind.'
    }),
    knex('houses').insert({
      name: 'Hufflepuff'
      imageUrl: 'http://www.hp-lexicon.org/images/icons/shield_huf.jpg',
      traits: 'Dedication, Hard Work, Fair Play, Patience, Kindness, Tolerance, Unafraid of Toil, Loyalty',
      quote: 'You might belong in Hufflepuff, where they are just and loyal, those patient Hufflepuffs are true, and unafraid of toil'
    }),
    knex('houses').insert({
      name: 'Slytherin'
      imageUrl: 'http://vignette2.wikia.nocookie.net/harrypotter/images/7/70/Slytherincrest.jpg/revision/latest?cb=20110401010320',
      traits: 'Resourcefulness, Cunning, Ambition, Self-Preservation, Cleverness, Fraternity',
      quote: 'Or perhaps in Slytherin, you\'ll make your real friends, those cunning folk use any means, to achieve their ends.'
    }
  );
};
