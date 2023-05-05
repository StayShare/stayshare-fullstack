const knex = require('../knex');

class Listing {
    constructor (id, user_id, price, location, availability, images) {
        this.id = id;
        this.user_id = user_id;
        this.price = price;
        this.location = location;
        this.availability = availability;
        this.images = images;      
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

    
    static async create(user_id, price, location, availability, images) {
      try {
        console.log({user_id, price, location, availability, images})
        const query = `INSERT INTO listings (user_id, price, location, availability, images) VALUES (?, ?, ?, ?, ?) RETURNING *`;
        const { rows: [listing] } = await knex.raw(query, [user_id, price, location, availability, images]);
        return new Listing(listing);
      } catch (err) {
        console.error(err);
        return null;
      }
    }

    static async find(id) {
      try {
        const query = 'SELECT * FROM listings WHERE id = ?';
        const { rows: [listing] } = await knex.raw(query, [id]);
        return listing ? new Listing (listing) : null;
      } catch (err) {
        console.error(err);
        return null;
      }
    }
     
    // static async update (id, price, location, images) {
    //   try {
    //     const [updatedListing] = await knex('listings')
    //       .where({ id })
    //       .update({ price, location, images })
    //       .returning('*');
    //     return updatedListing ? new Listing (updatedListing) : null;
    //   } catch (err) {
    //       console.error(err);
    //       return null;
    //   }
    // };

    update = async (price, location, images) => {
      try {
        const [updatedListing] = await knex('listings')
          .where({ id: this.id.id })
          .update({ price, location, images })
          .returning('*');
        return updatedListing ? new Listing (updatedListing) : null;
      } catch (err) {
          console.error(err);
          return null;
      }
    };
    
    static async delete(id) {
      try {
        const query = `DELETE FROM listings WHERE id = ? RETURNING *;`
        await knex.raw(query, [id]);
        
      } catch (err) {
        console.error(err);
        return null;
      }
    }
}

module.exports = Listing