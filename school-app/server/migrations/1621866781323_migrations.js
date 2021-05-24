/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = async(pgm) => {
  pgm.createTable('users', {
              id: 'id',
              email: {
                  type: 'varchar(1000)',
                  notNull: true
              },
              password: {
                  type: 'varchar(1000)',
                  notNull: true
              },
              createdAt: {
                  type: 'timestamp',
                  notNull: true,
                  default: pgm.func('current_timestamp'),
      },
              updatedAt: {
                  type: 'timestamp',
                  notNull: true,
                  default: pgm.func('current_timestamp'),
      },
              deletedAt: {
                  type: 'timestamp',
                   comment:
                       'We do soft deletes - This field marks if a user has been deleted',
                  default: pgm.func('current_timestamp'),
      },
    })
};

exports.down = async(pgm) => {
pgm.dropTable('users');
};
