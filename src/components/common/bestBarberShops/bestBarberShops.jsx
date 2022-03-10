import React, { Component } from 'react'

import Tabs from '../tab/tabs'
import TabsHeader from '../tab/tabsHeader'
import TabsContent from '../tab/tabsContent'
import TabHeader from '../tab/tabHeader'
import TabContent from '../tab/tabContent'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initTab } from '../../../store/actions/barberShopsFilter'

class BestBarberShops extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.initTab()
    }

    selectFilter(e) {
        let element = e.target;
    }

    render() {
        return (
            <div className="bestBarberShops">
                <h1 className="poppins">Melhores barbearias</h1>
                <div className="tabsBest">
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Nota' target='tabNota'></TabHeader>
                            <TabHeader label='Preço' target='tabPreco'></TabHeader>
                            <TabHeader label='Proximidade' target='tabProximidade'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabNota'>
                                <h1>NOTA</h1>
                                {/* <Carrousel></Carrousel> */}
                            </TabContent>
                            <TabContent id='tabPreco'>
                                <h1>PREÇO</h1>
                            </TabContent>
                            <TabContent id='tabProximidade'>
                                <h1>PROXIMIDADE</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({initTab}, dispatch)
export default connect(null, mapDispatchToProps)(BestBarberShops)