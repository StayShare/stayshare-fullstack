const knex = require('../knex');

class Listing {
    constructor (id, user_id, location, availability, image) {
        this.id = id;
        this.user_id = user_id;
        this.location = location;
        this.availability = availability;
        this.image = image;      
    }
    static async list() {
        try {
            const query = 'SELECT * FROM listings';
            const { rows } = await knex.raw(query);
            return rows.map((listing) => new Listing(listing))
        } catch (err) {
            console.error(err);
          return null;
        }
    }

    
    static async create(user_id, location, availability, image) {
      try {
        const query = `INSERT INTO listings (user_id, location, availability,images) VALUES (?, ?, ?, ?) RETURNING *`;
        const { rows: [listing] } = await knex.raw(query, [user_id, location, availability, image]);
        return new Listing(listing);
      } catch (err) {
        console.error(err);
        return null;
      }
    }
}

module.exports = Listing