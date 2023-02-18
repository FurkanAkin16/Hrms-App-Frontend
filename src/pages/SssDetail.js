import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

export default class AccordionExampleInverted extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Segment inverted>
                <Accordion inverted>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        Kariyer Haritasını nasıl kullanabilirim?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <p>
                            Okumak istediğiniz ya da şu an okuduğunuz üniversite ve bölümü seçerek, daha önce aynı üniversite ve bölümden mezun olmuş kişilerin hangi sektörlerde, hangi departmanlarda çalıştığını,
                            staj yapıp yapmadıklarını, yüksek lisans yapıp yapmadıklarını görebilirsiniz.
                        </p>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        MAJOR.NET’te İşe Alım
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                            Türkiye'nin en geniş aday veri tabanına sahip MAJOR.NET işe alım sürecini MAJOR.NET ve majorexecutive.net üzerinden yürütüyor.
                        </p>
                    </Accordion.Content>

                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        Kariyer Haritasındaki iş ilanlarına başvurmak için ne yapmam gerekiyor?
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                            Kariyer Haritasındaki iş ilanları MAJOR.NET`te yayınlanan iş ilanlarıdır. İş başvurunuzu yapabilmek için, MAJOR.NET`te özgeçmiş oluşturup, üyelik kaydınızı tamamlamanız yeterli.
                        </p>

                    </Accordion.Content>
                    <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown' />
                        İnsan Kaynakları Politikası
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <p>
                            Türkiye'nin ilk İnsan Kaynakları ve Kariyer sitesi olmanın sorumluluğunun bilincinde olan MAJOR.NET, kendi insan kaynağını en etkin şekilde kullanmaya ve geliştirmeye önem veriyor. 11 yıllık başarı serüveninin ardında, doğru İnsan Kaynakları politikası uygulamalarının ve çalışanlara verilen değerin önemi büyük önem teşkil ediyor. Çalışanlarına eğitim,
                            kariyer planlama, kişisel gelişim anlamında her zaman destek olan Kariyer.net; insan ilişkileri güçlü, görev bilincine sahip, yeni fikirlere açık, yaratıcı ve gelişim odaklı kişilerle çalışmaya devam etmeyi hedefliyor.
                        </p>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        )
    }
}