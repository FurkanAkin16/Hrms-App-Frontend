import React from 'react'
import { Button, Icon, Item, Segment } from 'semantic-ui-react'

const segmentStyle = {
    backgroundColor: 'grey'
};


const ItemExampleRatings = () => (
    <Item.Group>
        <Item>
            <Item.Image size='tiny' src='https://res.cloudinary.com/dqwqallnf/image/upload/v1676209490/My_project_erqibz.jpg' />
            <Item.Content verticalAlign='middle'>
                <Item.Header>
                    <Icon name='user' />
                    Furkan Akın
                </Item.Header>
                <Item.Description>
                    <Segment >
                        <Segment style={segmentStyle}>Merhaba, ben Furkan. Kod yazmaktan, oyun oynamaktan ve kedilerle vakit geçirmekten keyif alıyorum. Ayrıca yeni teknolojiler öğrenmeyi seviyorum.</Segment>
                    </Segment>
                    <Segment >
                        <Segment style={segmentStyle}> 
                            <a href="https://twitter.com/majorzfps" target="_blank">
                                <Button color='twitter'>
                                    <Icon name='twitter' /> Twitter
                                </Button>
                            </a>
                            <a href="https://www.linkedin.com/in/furkan-akın-7a0052262/" target="_blank">
                                <Button color='linkedin'>
                                    <Icon name='linkedin' /> LinkedIn
                                </Button>
                            </a>
                            <a href="https://www.instagram.com/furkannn_akn/" target="_blank">
                                <Button color='instagram'>
                                    <Icon name='instagram' /> Instagram
                                </Button>
                            </a>
                            <a href="https://github.com/FurkanAkin16" target="_blank">
                                <Button color='black'>
                                    <Icon name='github' /> gitHub
                                </Button>
                            </a>
                        </Segment>
                    </Segment>
                </Item.Description>
            </Item.Content>
        </Item>


    </Item.Group>
)

export default ItemExampleRatings