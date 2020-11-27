import React from 'react'
import {FormControl, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'

import {useFormik} from "formik";
import {AuthStore, SET_AUTH} from "../../state/stores/AuthStore";







export const Form = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
            rememberMe:false
        },
        onSubmit: () => {
            if (formik.values.email === '1'&& formik.values.password === '1' ){
                return AuthStore.dispatch(SET_AUTH,false)
            } else { alert('Incorrect email or password')}
        },
    })



    return (

        <Grid container justify="center">
            <Grid item xs={8}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <p>Please use common test account credentials:</p>
                            <p>Email: "1"</p>
                            <p>Password: "1" </p>
                        </FormLabel>

                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                            <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )
}
