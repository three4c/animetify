create table if not exists animetify.anison(
  /* 番組ID */
  animeId int(11),
  /* 番組分類 */
  animeClassification text,
  /* 番組名 */
  animeName text,
  /* 摘要 */
  animeDescription text,
  /* 放映順 */
  broadcastOrder text,
  /* 楽曲ID */
  musicId int(11),
  /* 楽曲名 */
  musicName text,
  /* 歌手名 */
  artistName text
);

create table if not exists animetify.program(
  /* 番組ID */
  animeId int(11),
  /* 番組分類 */
  animeClassification text,
  /* ゲーム種別 */
  gameType text,
  /* 番組名 */
  animeName text,
  /* 番組名（カタカナ） */
  animeNameKata text,
  /* 番組名補 */
  programNameSupplement text,
  /* 番組名補（カタカナ） */
  programNameSupplementKata text,
  /* 放映話数 */
  numberOfBroadcastStorie text,
  /* 年齢制限 */
  ageLimit int(3),
  /* 放映開始日 */
  broadcastStartDate text
);

load data local infile "/docker-entrypoint-initdb.d/anison.csv"
into table animetify.anison fields terminated
by ',' optionally enclosed
by '"' lines terminated
by '\r\n' ignore 1 lines;

load data local infile "/docker-entrypoint-initdb.d/program.csv"
into table animetify.program fields terminated
by ',' optionally enclosed
by '"' lines terminated
by '\r\n' ignore 1 lines;

create table if not exists animetify.anisonProgram
as
select
anison.animeName,
program.animeNameKata,
anison.animeClassification,
anison.musicName,
anison.artistName,
anison.animeDescription,
anison.broadcastOrder,
program.broadcastStartDate
from anison
inner join program
using(animeId);

update animetify.anisonProgram
set artistName = replace(artistName, ',', '・');