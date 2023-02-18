import React from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Tablo from './Tablo'
import SssDetail from '../pages/SssDetail'
import CalısanDetail from '../pages/CalısanDetail'
import IsVerenDetail from '../pages/IsVerenDetail'
import HakkimizdaDetail from '../pages/HakkimizdaDetail'
import KayitDetail from '../pages/KayitDetail'
import ProfilDetail from '../pages/ProfilDetail'
import BasvuruDetail from '../pages/BasvuruDetail'
import JobDetail from '../pages/JobDetail'
import HomePageDetail from '../pages/HomePageDetail'
import JobList from '../pages/JobList'

export default function Dashboard() {
  return (
    <div>
        <Grid>
            <Grid.Column width={4}>
                <Tablo/>
            </Grid.Column>
            <Grid.Column width={12}>
            <Route exact path ="/SSS"  component={SssDetail} />    
            <Route exact path ="/Calısanlar"  component={CalısanDetail} />
            <Route exact path ="/IsVeren"  component={IsVerenDetail} />
            <Route exact path ="/Hakkımızda"  component={HakkimizdaDetail} />
            <Route exact path ="/KayıtOl"  component={KayitDetail} />
            <Route exact path ="/UserProfil"  component={ProfilDetail} />
            <Route exact path ="/Basvuru"  component={BasvuruDetail} />
            <Route exact path ="/JobDetail"  component={JobDetail} />
            <Route exact path ="/"  component={JobList} />
            </Grid.Column>
        </Grid>
    </div>
  )
}
