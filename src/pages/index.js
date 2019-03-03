import React from "react"
import styles from "../styles/index.module.css"
import Container from "../components/container"
import { Link } from "gatsby";

//Declaration for the Item container is done here
const Item = props => (
    <div className={styles.item}>
      <img src={props.itemImage} className={styles.itemImage} alt="" />
      <div className={styles.description}>
        <h2 className={styles.itemTitle}>{props.itemTitle}</h2>
        <p className={styles.itemDesc}>{props.itemDesc}</p>
      </div>
    </div>
    )

export default () => (
    <Container>
        <h1>Random store btw..</h1>
        <p>Below are a few items that you can take a look at for no reason.</p>
        <Item 
            itemTitle="Yoyo"
            itemImage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yo-Yo-Plastic-Toy-Green.jpg/1200px-Yo-Yo-Plastic-Toy-Green.jpg"
            itemDesc="It's a yoyo"
      
        />
        <Item
            itemTitle="Chair"
            itemImage="data:image/jpeg;base64,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"
            itemDesc="It's a chair"
      
        />
        <Item
            itemTitle="Mug"
            itemImage="https://www.mklimited.co.uk/images/stories/virtuemart/product/322430.jpg"
            itemDesc="It's a mug"
        />
    </Container>
)


  