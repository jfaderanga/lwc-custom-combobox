import { LightningElement, api, wire, track} from 'lwc';

export default class GenerateNotification extends LightningElement {
    @track selectedOption;

    options = [
        {
            "group": "Group One",
            "label": "label1",
            "value": "value1",
            "selected": false
        },
        {
            "group": "Group One",
            "label": "label2",
            "value": "value2",
            "selected": false
        },
        {
            "group": "Group One",
            "label": "label3",
            "value": "value3",
            "selected": false
        },
        {
            "group": "Group Two",
            "label": "label4",
            "value": "value4",
            "selected": false
        },
        {
            "group": "Group Two",
            "label": "label5",
            "value": "value5",
            "selected": false
        }
    ]
    get templateSelected() {
        return this.selectedOption ? this.selectedOption.label : '--None--';
    }

    handleSelectOption(event) {
        this.selectedOption = event.detail.value;
    }

    handlePreview(event) {
        this.dispatchEvent(new CustomEvent('preview', {
            detail: this.selectedOption
        }));
    }
}