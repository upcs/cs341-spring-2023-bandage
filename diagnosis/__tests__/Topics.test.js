/**
 * Test for Topics
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Topics from '../screens/Topics';
import { Linking } from 'react-native';
import HO_MM from '../screens/topics-screens/HO_MM';
import HC_MM from '../screens/topics-screens/HC_MM';
import Pulmonolgy_MM from '../screens/topics-screens/Pulmonology_MM';
import Rheumatology_MM from '../screens/topics-screens/Rheumatology_MM';
import Nails_MM from '../screens/topics-screens/Nails_MM';
import Cardiology_Tutorial from './../screens/topics-screens/Cardiology_Tutorial';
import Cardiology_MM from './../screens/topics-screens/Cardiology_MM';
import Endocrinology_Tutorial from './../screens/topics-screens/Endocrinology_Tutorial';
import Endocrinology_MM from './../screens/topics-screens/Endocrinology_MM';
import Nephrology_MM from './../screens/topics-screens/Nephrology_MM';
import ID_Tutorial from '../screens/topics-screens/ID_Tutorial';
import Neurology_Tutorial from '../screens/topics-screens/Neurology_Tutorial';
import Gastro_Tutorial from './../screens/topics-screens/Gastro_Tutorial';
import Nephrology_Tutorial from '../screens/topics-screens/Nephrology_Tutorial';
import Nails_Tutorial from '../screens/topics-screens/Nails_Tutorial';
import Rheumatology_Tutorial from '../screens/topics-screens/Rheumatology_Tutorial';
import HC_Tutorial from '../screens/topics-screens/HC_Tutorial';
import Misc_MM from '../screens/topics-screens/Misc_MM';
import HO_Tutorial from '../screens/topics-screens/HO_Tutorial';
import Pulmonolgy_Tutorial from '../screens/topics-screens/Pulmonolgy';
import Misc_Tutorial from '../screens/topics-screens/Misc_Tutorial';
import ID_MM from './../screens/topics-screens/ID_MM';
import Neurology_MM from './../screens/topics-screens/Neurology_MM';

describe('<Topics />', () => {

     test("renders correctly", () => {
        const tree = renderer.create(<Topics/>).toJSON();
        expect(tree).toMatchSnapshot();
     });
     // Currently just testing Cardiology linking is not yet done, must make sure site is loaded right TODO
     test("Cardiology", () => {
        const tutorialSnap = renderer.create(<Cardiology_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Cardiology_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://physicaldiagnosispdx.com/card-tutorial/');
        const MM = Linking.canOpenURL('https://physicaldiagnosispdx.com/cardiology-multimedia-new/');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Endocrinology", () => {
        const tutorialSnap = renderer.create(<Endocrinology_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Endocrinology_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Endocrinology_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Endocrinology_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Gastroenterology", () => {
        const tutorialSnap = renderer.create(<Gastro_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Endocrinology_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Gastro_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Gastro_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Infectious Diseases", () => {
        const tutorialSnap = renderer.create(<ID_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<ID_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/ID_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/ID_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Neurology", () => {
        const tutorialSnap = renderer.create(<Neurology_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Neurology_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Neurology_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Neurology_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Nephrology", () => {
        const tutorialSnap = renderer.create(<Nephrology_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Nephrology_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Nephrology_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Nephrology_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Nails", () => {
        const tutorialSnap = renderer.create(<Nails_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Nails_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Nails_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Nails_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Rheumatology", () => {
        const tutorialSnap = renderer.create(<Rheumatology_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Rheumatology_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Rheumatology_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Rheumatology_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Hematology-Oncology", () => {
        const tutorialSnap = renderer.create(<HO_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<HO_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/HO_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/HO_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Heridatary Conditions", () => {
        const tutorialSnap = renderer.create(<HC_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<HC_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/HC_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/HC_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });


     test("Pulmonolgy", () => {
        const tutorialSnap = renderer.create(<Pulmonolgy_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Pulmonolgy_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Pulmonolgy_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Pulmonolgy_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });

     test("Misc", () => {
        const tutorialSnap = renderer.create(<Misc_Tutorial/>).toJSON();
        const MMSnap = renderer.create(<Misc_MM/>).toJSON();
        const tutorial = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Misc_Tutorial.php');
        const MM = Linking.canOpenURL('https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Misc_MM.php');
        expect(tutorialSnap).toMatchSnapshot();
        expect(MMSnap).toMatchSnapshot();
        expect(tutorial).toBeTruthy();
        expect(MM).toBeTruthy();
     });
});
