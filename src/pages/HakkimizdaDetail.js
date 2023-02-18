import React from 'react'
import { Message } from 'semantic-ui-react'


const MessageExampleColor = () => (
    <div>
        <Message icon color='teal'>
            <i aria-hidden="true" className='home icon'></i>
            <Message.Content>
                <Message.Header>Hakkımızda</Message.Header>
                <p>2019’dan bu yana Türkiye’nin en büyük istihdam platformu olan MAJOR.NET</p>
            </Message.Content>
        </Message>
        <Message icon color='teal'>
            <i aria-hidden="true" className='user icon'></i>
            <Message.Content>
                <Message.Header >Çalışan</Message.Header>
                <p> 400 Kişilik uzman çalışan kadromuz ile hizmetinizdeyiz.</p>
            </Message.Content>
        </Message>
        <Message icon color='teal'>
            <i aria-hidden="true" className='file alternate icon'></i>
            <Message.Content>
                <Message.Header>Özgeçmiş</Message.Header>
                <p>25 Milyondan fazla özgeçmiş</p>
            </Message.Content>
        </Message>
        <Message icon color='teal' size='tiny'>
            <i aria-hidden="true" className='globe icon'></i>
            <Message.Content>
                <Message.Header>Vizyonumuz</Message.Header>
                <p>Vizyonumuz; dijital teknolojileri kullanarak daha fazla aday ve işvereni insan kaynakları ve kariyer süreçlerinde doğru iş ve yetenekle buluşturmak, Türkiye'nin istihdam piyasasına yön vermek.</p>
            </Message.Content>
        </Message>





    </div>
)

export default MessageExampleColor

