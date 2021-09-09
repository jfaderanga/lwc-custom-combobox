# Salesforce LWC Lightning Combobox
A custom LWC component as an alternative to Salesforce standard lightning combobox element.

## How to use
Reference it to your component as below, required attribute is optional

```
<c-combobox options={options} label="Select Template" value={templateSelected} onselect={handleTemplateSelect} required="true"></c-combobox>
```

Options format, group is optional, it can be present on the object or not at all

```json
[
    {
        "group": "Group One",
        "label": "label1",
        "value": "value2",
        "selected": false
    },
    {
        "group": "Group One",
        "label": "label2",
        "value": "value2",
        "selected": false
    },
    {
        "group": "Group tTwo",
        "label": "label3",
        "value": "value3",
        "selected": false
    }
]
```
## Demo
![This is an image](https://github.com/jfaderanga/lwc-custom-combobox/blob/master/demo.gif)