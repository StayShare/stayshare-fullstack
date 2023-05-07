const knex = require('../knex');

class Booking {
    constructor (id, user_id, listing_id, start_date, end_date) {
        this.id = id;
        this.user_id = user_id;
        this.listing_id = listing_id;
        this.start_date = start_date;
        this.end_date = end_date;    
    }
    static async list() {
        try {
            const query = 'SELECT * FROM bookings';
            const { rows } = await knex.raw(query);
            return rows.map((booking) => new Booking(booking))
        } catch (err) {
            console.error(err);
          return null;
        }
    }

    
    static async create(id, user_id, listing_id, start_date, end_date) {
      try {
        console.log({id, user_id, listing_id, start_date, end_date})
        const query = `INSERT INTO bookings (id, user_id, listing_id, start_date, end_date) VALUES (?, ?, ?, ?, ?) RETURNING *`;
        const { rows: [booking] } = await knex.raw(query, [id, user_id, listing_id, start_date, end_date]);
        return new Booking(booking);
      } catch (err) {
        console.error(err);
        return null;
      }
    }

    static async find(id) {
      try {
        const query = 'SELECT * FROM bookings WHERE id = ?';
        const { rows: [booking] } = await knex.raw(query, [id]);
        return booking ? new Booking (booking) : null;
      } catch (err) {
        console.error(err);
        return null;
      }
    }
    
    static async delete(id) {
      try {
        const query = `DELETE FROM bookings WHERE id = ? RETURNING *`;
        await knex.raw(query, [id]);
        
      } catch (err) {
        console.error(err);
        return null;
      }
    }
}

module.exports = Booking