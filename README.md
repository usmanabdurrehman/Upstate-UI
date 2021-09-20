# Running Instructions
Run npm start and npm run server to run both the front and backend
Running the backend isn't necessary but can to ensure no error is being 
thrown when the form gets submitted.

# Note:
1) Right now only use Checkbox and Input as widgets. It would work with all other components
as well with little tweaks but for now testing can be done with these two
2) Rules are not working now as they result in an infinite render. Figuring it out
3) Right now its hooked up with a custom library but can be linked with any UI
library


# Schema format
Keys which have a ? after them are optional
The rest are required
```javascript
{
  <Name of formfield>:{
    widget:<Name of component to be used>,
    block?:<Name of block this formfield is part of>
    gridRow?:<Which row it should be on> defaultValue => 'auto',
    gridColumn?:<Which column it should be on> defaultValue => 1,
    condition:[
      {
        name:<Name of condition> Allowed values show | propPass,
        value:<Value which should trigger condition>,
        applyTo:<Name of field or block on which the condition should be applied>,
        order?:<Order in which conditions should be applied>
        props?:<Props to be passed in the applyTo field when name of condition is propPass>,
        function?:<Name of the rule function to be called when name of condition is rule>, 
        params?:<Params to be passed to the rule function when name of condition is rule>
      },
      ...
    ],
    {...props a component expects}
  },
  ....
}
```

# Schema Keys/Properties Description

### widget<string>
Name of the component which is to be used. It should be a valid component name
e.g if a component is normally imported as import {Button} from '@material-ui/core'
then it should be "Button". 

### block<string>
Name of the block. We can assign form fields to blocks so that we can apply
a condition to more than one fields at the same time without writing a condition
over and over again

### gridRow<integer specifying row | "auto">

### gridColumn<integer specifying column | "auto">

### condition<array of conditions>
An array of conditions which a particular form field will trigger. Each condition
would have the following keys

##### 1) name
Name of the condition. It would either be show or propPass for now
show would show the block of fields or indivdiual field specified in the applyTo property

##### 2) value
The value of the form field at which the condition should trigger

##### 3) applyTo
Which field or block of fields should this condition be applied on

##### 4) order
This property is vital for how the show condition would work
If two conditions applied on the same field have the same order then both the conditions
need to be fulfilled in order to show the field or block specified in applyTo

If two conditions applied on the same field have different order then the condition
with greater order would have more preference over whether the field or block
should be shown or not. e.g if there is a condition with an order of 2, it would 
overshadow the effect of condition with order 1.

##### 5) props
Props to be passed in the applyTo field if the name of condition is propPass

##### 6) function
Name of function which should be called if the name of condition is rule

##### 7) params
Params to be passed in the rule function call if the name of condition is rule

# FormData
formdata to be passed. Structure is similar to

# submitOptions
The properties which axios accepts like url, method, withCredentials etc
This can be replaced with fetch, react-query or any other library.