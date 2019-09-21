import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup} from 'reactstrap';

class Login extends Component {
    static propTypes = {
        // user: PropTypes.oneOfType([
        //     PropTypes.string,
        //     PropTypes.object
        // ]),
        // dispatch: PropTypes.func
    };

    state = {
        // loading: true
    };

    constructor(props) {
        super(props);
        // this.account = this.account.bind(this);
    };

    componentDidMount = async () => {
        // const { dispatch, itemsFilters } = this.props;
        // await dispatch(loadAccounts(itemsFilters));
        // this.setState({ loading: false });
    };

    handleConfirm = async () => {
        // const { dispatch } = this.props;
        // await dispatch(updateAccount(accountDetails, false));
    };
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup className="mb-4">
                                <Card className="p-4">
                                    <CardBody>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <InputGroup className="mb-3">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                              <i className="icon-user"></i>
                                            </span>
                                            </div>
                                            <Input type="text" placeholder="Username"/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                              <i className="icon-lock"></i>
                                            </span>
                                            </div>
                                            <Input type="password" placeholder="Password"/>
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4">Login</Button>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Button color="link" className="px-0">Forgot password?</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>lamejormesa.com</h2>
                                            <p>Gestione sus reservas desde cualquier dispositivo</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

Login = connect(state => ({
    // user: state.get('auth').get('user')
}))(Login);

export default reduxForm({
    form: 'loginForm'
})(Login);