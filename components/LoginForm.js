import React, { useCallback, useMemo, useState } from 'react';
import { Form, Checkbox, Row, Col, Input, Button, Select,Alert } from 'antd'
import { useForm, Controller } from 'react-hook-form';
import Link from 'next/link'

import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top:10px;
`;

const LinkWrapper = styled(Link)`
    margin:10px
`;




const LoginForm = ({ LoginType }) => {
    const { control, handleSubmit ,errors } = useForm();
    const style = useMemo(()=>({"padding":"10px"}), []);
    const onSubmit = useCallback(data => {
        console.log("11111111111", data);
    }, []);

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };

    return (
        <div >
            <Row justify="center">
                <Col>
                     {/* onFinish e.preventDefault 가 적용되어 있음..  */}
                    <Form onFinish={handleSubmit(onSubmit)}>     
                        {(LoginType !== 99) &&
                            <div>
                                <label htmlFor="compno"> 회사 아이디</label>
                                <br></br>
                                <Controller
                                    name="compno"
                                    as={Select}
                                    options={[
                                    { value: "1", label: "언더텐" },
                                    { value: "2", label: "스카이티" },
                                    { value: "4", label: "도매의신" }
                                    ]}
                                    defaultValue="1"
                                    control={control}
                                    rules={{ required: true }}
                                />
                            </div>
                        }
                        <div>
                            <label htmlFor="userId"> 아이디</label>
                            <br></br>
                            <Controller as={Input} name="userId" control={control} defaultValue="" placeholder="아이디"  rules={{ required: true }} />
                            {/* {errors.userId &&    <Alert
                                                    message="사용자 아이디를 입력해 주세요"
                                                    description="This is an error message about copywriting."
                                                    type="error"
                                                    showIcon
                                                    closable
                                                    onClose={onClose}
                                                    />} */}
                        </div>
                        <div>
                            <label htmlFor="userPassword" > 아이디</label>
                            <br></br>
                            <Controller as={Input} name="userPassword" placeholder="패스워드" control={control} defaultValue=""  rules={{ required: true }} />
                        </div>
                        <div>
                            <Controller
                                name="chkIdSave"
                                control={control}
                                defaultValue={false}
                                render={props =>
                                    <Checkbox onChange={onChange}>아이디저장</Checkbox>
                                } 
                            />
                        </div>
                        <ButtonWrapper>
                            <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                            <LinkWrapper href="/signup"><a style={style} ><Button> 회원가입 </Button></a></LinkWrapper>
                        </ButtonWrapper>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default LoginForm;