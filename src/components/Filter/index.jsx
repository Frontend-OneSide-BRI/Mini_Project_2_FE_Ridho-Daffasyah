//Filter Component
import React from 'react';

//Import CSS
import './index.css';

//Import Components
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGallery from '../CardGallery';

const FilterComponent = ({ data, category }) => {
    return (
        <Tabs
            defaultActiveKey="All"
            id="justify-tab-example"
            className="mb-3 nav-tabs"
            justify
        >
            {
                category
                    .map((item, index) => {
                        return (
                            <Tab key={index} eventKey={item} title={item}>
                                <Tab.Content>
                                    <Tab.Content>
                                        <Tab.Pane
                                            className="fade show active"
                                            id={`nav-${category}`}
                                            role="tabpanel"
                                            aria-labelledby={`nav-${category}-tab`}
                                            eventKey={category}
                                        >
                                            <CardGallery data={data} category={item} />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Content>
                            </Tab>
                        )
                    })}
        </Tabs>
    )
};

export default FilterComponent;