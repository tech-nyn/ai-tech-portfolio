
import React, { useEffect, useContext, useState } from 'react';

import axios from 'axios';

import ContentBox from './ContentBox';
import Text from './Text'
import StatCard from './StatCard';
import IconButton from './IconButton';
import PortfolioCard from './PortfolioCard';
import SocialIcon from './SocialIcon';

import './AppShell.css';

// import user_avatar from '../assets/user-avatar.jpg';
import waving_hand from '../assets/waving-hand.png';
import hamburger_icon from '../assets/hamburger-icon.png';
import portfolio_1 from '../assets/portfolio-1.png';
import portfolio_2 from '../assets/portfolio-2.png';
import portfolio_3 from '../assets/portfolio-3.jpeg';
import location_globe from '../assets/location-globe.png';
import social_fbk from '../assets/social-fbk.png';
import social_drb from '../assets/social-drb.png';
import social_twt from '../assets/social-twt.png';
import social_itg from '../assets/social-itg.png';







function AppShell() {

    const userUrl = "https://jsonplaceholder.typicode.com/users";
    const postUrl = "https://jsonplaceholder.typicode.com/posts";

    // const user = {
    //     name: "Aremu Zulu-Qarnayn",
    //     location: "Paris"
    // };
    // const about = "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectoest rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nullaet iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit autullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velitrepudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque";

    const [user, setUser] = useState({ name: "", location: ""});
    const [about, setAbout] = useState("");
    const [isLoading, setLoadingState] = useState(false);

    useEffect(() => {
        axios.get(userUrl).then((userList) => {setUser({name: userList.data[0].name, location: userList.data[0].address.city});});
        axios.get(postUrl).then((aboutList) => {setAbout(
            [ 
                ...aboutList.data[0].body,
                ...aboutList.data[1].body,
                ...aboutList.data[2].body,
                ...aboutList.data[3].body,
                ...aboutList.data[4].body
            ]
        );});
        

        // console.log(`ABOUT     ::  ${about}`);
        // console.log(`NAME      ::  ${user.name}`);
        // console.log(`LOCATION  ::  ${user.location}`);

    }, []);


 
    return (
        // isLoading ? 
        <>
            <section className="top-section">
                <div className="top-left">
                    <div className="heading-quote colored-box">
                        <Text text={"Bringing Your Ideas To Life Through UI Design"} isBold={true}/>
                        <IconButton
                            label={"Hire Me"} 
                            icon={waving_hand}
                        />
                    </div>
                    <div className="stat-card-container">
                        <StatCard  statCount={"2+"} description={"Years Experience"} />
                        <StatCard  statCount={"54+"} description={"Handled Projects"} />
                        <StatCard  statCount={"40+"} description={"Clients"} />
                    </div>
                </div>
                <div className="top-right">
                    <div className="button-heading colored-box">
                        <h3><span className="bim">Bim</span>Graph</h3>
                        <img className='hamburger-icon' src={hamburger_icon}></img>
                    </div>
                    <div className="user-bio-container">
                        <div className="user-picture colored-box">
                        </div>
                        <div className="user-bio">
                            <div className="name-box colored-box">
                                <ContentBox
                                    leftHeading={<Text text={"Name"} isDark={true}/>}
                                    rightHeading={<Text text={user.name} isBold={true} size={18}/>}
                                />
                            </div>
                            <div className="location-box colored-box">
                                <ContentBox
                                    leftHeading={<Text text={"Location"} isDark={true}/>}
                                    rightHeading={<Text text={user.location} isBold={true} size={18}/>}
                                    content={<img className='location-globe' src={location_globe}/>}
                                />
                            </div>
                            <div className="social-handles-box colored-box">
                                <SocialIcon icon={social_drb} />
                                <SocialIcon icon={social_fbk} />
                                <SocialIcon icon={social_itg} />
                                <SocialIcon icon={social_twt} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section className="bottom-section">
                <div className="bottom-left colored-box">
                    <ContentBox
                        leftHeading={<Text text={"UI Profile"} isBold={true} size={24}/>}
                        rightHeading={<Text text={"See All"} isBold={true} isDark={true} size={24}/>}
                        content={
                            <>
                                <PortfolioCard image={portfolio_1} />
                                <PortfolioCard image={portfolio_2} />
                                <PortfolioCard image={portfolio_3} />
                            </>
                        }
                    />
                </div>
                <div className="bottom-right content-box colored-box">
                    <ContentBox
                        leftHeading={<Text text={"About"} isBold={true} size={24}/>}
                        rightHeading={<Text text={"Resume"} isBold={true} isDark={true} size={24}/>}
                        content={ <Text text={about} /> }
                    />
                </div>
            </section>
        </>
        // :
        // <>
        //     <h1>Hello World</h1>
        // </>
    );
}


export default AppShell;



// MainContainer
//     TopSection
//         TopSectionLeft
//             TopSectionHeading
//             TopSectionStatCards
//         TopSectionRight
//             TopSectionRightTop
//             TopSectionRightBottom
//                 TopSectionRightBottomLeft
//                     AvatarImage
//                 TopSectionRightBottomRight
//                     NameCard
//                     LocationCard
//                     SocialConnectCards
//     BottomSection
//         PortfolioShowCase
//             PortfolioShowCaseHeader
//             PortfolioShowCaseContent
//                 PortfolioShowCaseCards
//         AboutSection
//             AboutHeader
//             AboutTextString