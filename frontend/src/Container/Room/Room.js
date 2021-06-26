import React, {Component} from 'react';

import styles from './Room.module.css'
// import Navbar from '../../components/Navbar/Navbar';
// import Footer from '../../components/Footer/Footer'

class Room extends Component {

    state = {
        room: ""
    }

    onRoomChangeHandler = (event) => {
        this.setState({room: event.target.value})
    }


    render() {
        
        return(
            <div>
                {/* <Navbar/> */}

                <div className={styles.centered_form}>
                    <div className={styles.centered_form__box}>

                        <div className={styles.name}>{localStorage.getItem("name")}</div>
                        {/* <div className={styles.room}>enter room name</div> */}
                        <input className={styles.input} type="text" onChange={this.onRoomChangeHandler} placeholder="Room Name"></input>

                        <a href={'/chat/' + this.state.room}  className={styles.join}>
                            <div className={styles.join}>JOIN</div>
                        </a>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Room;
