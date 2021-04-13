import mysql from 'mysql';

export const getAnisonProgramList = (
  title?: string,
  year?: string,
  season?: 'spring' | 'summer' | 'autumn' | 'winter',
  song?: string,
  all?: boolean
) => {
  return new Promise<void>((resolve) => {
    /** MySQLの設定情報 */
    const MYSQL_SETTING = {
      host: process.env.MYSQL_ROOT_HOST,
      password: process.env.MYSQL_ROOT_PASSWORD,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE,
    };

    const seasons = {
      spring: 4,
      summer: 7,
      autumn: 10,
      winter: 1,
    };

    const query =
      'select * from anisonProgram where animeClassification = "TV"';
    let sql = '';

    if (title) {
      sql = `${query} and animeName like '%${title}%'`;
    } else if (year && season) {
      sql = `${query} and ( broadcastStartDate like '${year}-${`0${seasons[season]}`.slice(
        -2
      )}%' or broadcastStartDate like '${year}-${`0${
        seasons[season] + 1
      }`.slice(-2)}%' or broadcastStartDate like '${year}-${`0${
        seasons[season] + 2
      }`.slice(-2)}%' )`;
    } else if (song) {
      sql = `${query} and musicName like '%${song}%'`;
    } else if (all) {
      sql = query;
    }

    /** コネクションの用意 */
    const connection = mysql.createConnection(MYSQL_SETTING);

    connection.connect((err) => {
      if (err) {
        console.log(process.env.MYSQL_ROOT_HOST);
        console.error(`error connect: ${err.stack}`);
        resolve();
      }

      /** SQL構文が空だとServer Errorになる */
      if (sql) {
        connection.query(sql, (err, results, fields) => {
          if (err) {
            console.error(`error query ${err.stack}`);
            resolve();
          }
          resolve(JSON.parse(JSON.stringify(results)));
        });
      } else {
        resolve(JSON.parse(JSON.stringify([])));
      }
    });
  });
};
