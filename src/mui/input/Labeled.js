import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
const Labeled = ({ label, resource, record, onChange, basePath, children }) => (
    <TextField
        floatingLabelText={label}
        floatingLabelFixed
        disabled
        fullWidth
        underlineShow={false}
        style={{ paddingTop: '2em' }}
    >
        {React.cloneElement(children, { record, resource, onChange, basePath })}
    </TextField>
);

Labeled.propTypes = {
    label: PropTypes.string.isRequired,
    record: PropTypes.object,
    resource: PropTypes.string,
    basePath: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.element,
};

export default Labeled;
