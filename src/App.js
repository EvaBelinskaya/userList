import React from 'react';
import './App.css';
import styles from './MY_STYLES.module.css';

const users = [
    {
        id: 1,
        name: 'Brian',
        surname: 'McCauley',
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        level: 1,
    },
    {
        id: 2,
        name: 'Chad',
        surname: 'Hayes',
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        level: 1,
    },
    {
        id: 3,
        name: 'Jeff',
        surname: 'Buck',
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        level: 1,
    },
    {
        id: 4,
        name: 'Kenny',
        surname: 'Griffin',
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        level: 1,
    },
    {
        id: 5,
        name: 'Tom',
        surname: 'Glover',
        profilePicture: 'https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png',
        level: 1,
    },

];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({items: users})
    }

    render() {
        const usersElements = this.state.items.map(item => {
            return (
                <li className={styles.userCardContainer}>
                   <div className={styles.userImageWrapper}>
                       <img className={styles.userImage} src={item.profilePicture} alt=""/></div>
                    <div className={styles.userInfoWrapper}>
                        <div className={styles.userFullName}>{`${item.name} ${item.surname}`}</div>
                        <div className={styles.userLevel}>Level {item.level}</div>
                    </div>
                    <div className={styles.checkBox}></div>
                </li>
            );
        });

        return (
            <ol className={styles.container}>
                {
                    usersElements
                }
            </ol>
        );
    }
}


export default App;
