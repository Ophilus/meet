import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
    

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('user did not select an event', () => {
            
        });
    
        when('they were shown', () => {
            AppWrapper = mount(<App />);
        });
    
        then('details will be collapsed', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0);
        });
    });
    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('user wanted to view event details', async () => {
            AppWrapper = await mount(<App />);
        });
    
        when('he clicked on the event', () => {
            AppWrapper.update();
            AppWrapper.find('.details').at(0).simulate('click');
        });
    
        then('the details will be displayed', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });
    });
    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the details got displayed', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.details').at(0).simulate('click');
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });
    
        when('user clicked button "collapse"', () => {
            AppWrapper.find('.details').at(0).simulate('click');
        });
    
        then('details will be collapsed', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0);
        });
    });
});