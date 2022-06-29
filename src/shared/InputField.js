import { TextField } from '@mui/material'
import { Field } from 'formik'
import React from 'react'

export const InputField = (props) => {
    const { name, label, ...rest } = props
    return (
        <div>
            <Field name={name}>{
                ({ field, form }) => {
                    return (
                        <TextField
                            fullWidth
                            error={!!form.errors[name] && form.touched[name]}
                            id={name}
                            label={label}
                            helperText={form.touched[name] ? form.errors[name] : null}
                            variant="outlined"
                            {...field}
                            {...rest}
                        />
                    )
                }
            }

            </Field>
        </div >
    )
}
