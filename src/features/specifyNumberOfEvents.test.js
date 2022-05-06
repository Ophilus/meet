import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from "../api";

const locations = extractLocations(mockData);

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn`t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user did not specify the number of events to be displayed', async () => {
            AppWrapper = await mount(<App />);
        });

        when('events are displayed', () => {
            AppWrapper.update();
        });

        then('32 events will be displayed by default', () => {
            expect(AppWrapper.find(".event")).toHaveLength(2);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants to see a certain number of events on the screen', async () => {
            AppWrapper = await mount(<App />);
        });

        when('he specifies the number of events', () => {
            let CitySearchWrapper;
            CitySearchWrapper = shallow(
                <CitySearch updateEvents={() => {}} locations={locations} />
              );
            AppWrapper.update();
            AppWrapper.find(".numberOfEvents").simulate("change", { target: { value: 1 } });
            CitySearchWrapper.find(".city").simulate("change", {
                target: { value: "all" },
           });
           AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        then('this number of events will be displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".event")).toHaveLength(1);
        });
    });
 });