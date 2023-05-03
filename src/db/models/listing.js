const knex = require('../knex');

class Listing {
    constructor (id, user_id, location, availability, img) {
        this.id = id;
        this.user_id = user_id;
        this.location = location;
        this.availability = availability;
        this.img;      
    }
    static async list() {
        try {
          const query = 'SELECT * FROM listing';
          const { rows } = await knex.raw(query);
          return rows.map((listing) => new Listing(listing))
        } catch (err) {
          console.error(err);
          return null;
        }
    }

    
    static async create(username, password) {
      try {
        const passwordHash = await authUtils.hashPassword(password);

        const query = `INSERT INTO users (username, password_hash)
          VALUES (?, ?) RETURNING *`;
        const { rows: [user] } = await knex.raw(query, [username, passwordHash]);
        return new User(user);
      } catch (err) {
        console.error(err);
        return null;
      }
    }
}

module.exports = Listing