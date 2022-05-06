

export default function handler(req, res) {
    fetch('https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json')
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        res.json(data);
      });
}
