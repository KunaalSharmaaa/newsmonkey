import React, { Component } from 'react'
import NewsBoxItem from './NewsBoxItem'

export class NewsBox extends Component {

    articles = [
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Austen Goslin, Pete Volk",
            "title": "EA Sports College Football 25 reveals top 100 player ratings",
            "description": "EA Sports College Football 25’s best players have been revealed, including the ratings for everyone in the top 100, with Will Johnson as the best overall",
            "url": "https://www.polygon.com/24195781/ea-sports-college-football-25-player-rankings-ratings-top-100",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/lOj1SQnepOhxSHKv6ZvqEP4Tzjs=/0x0:3574x1871/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25452914/ea_sports_college_football_25_travis_hunter_3574.jpg",
            "publishedAt": "2024-07-10T17:23:13Z",
            "content": "College football is just over a week away from its return to video games, and to celebrate EA has spent the last several days releasing new tidbits of information about the game. There was a deep div… [+3157 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": null,
            "title": "National Football League\n     \u003C!----\u003E \n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago",
            "description": null,
            "url": "http://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine",
            "urlToImage": null,
            "publishedAt": "2024-02-29T18:37:22.5746516Z",
            "content": null
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "Unique Stats from the 2023 College Football Regular Season",
            "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
            "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
            "publishedAt": "2023-12-12T12:00:00Z",
            "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello i am a constructor from newsBox")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row">
                    <div className="col-md-4">
                        <NewsBoxItem title="Cricket" description="ICC World Cup" imageUrl="https://cdn.vox-cdn.com/thumbor/lOj1SQnepOhxSHKv6ZvqEP4Tzjs=/0x0:3574x1871/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25452914/ea_sports_college_football_25_travis_hunter_3574.jpg" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsBoxItem title="Cricket" description="ICC World Cup"/>
                    </div>
                    <div className="col-md-4">
                        <NewsBoxItem title="Cricket" description="ICC World Cup"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsBox
