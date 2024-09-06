import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {SignInFlow} from "@/features/auth/types";
import {useState} from "react";

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
}

const SignUpCard = ({setState}:SignUpCardProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <Card className={'w-full h-full p-8'}>
            <CardHeader className={'px-0 pt-0'}>
                <CardTitle>
                    Sign up to continue
                </CardTitle>
            </CardHeader>
            <CardDescription>
                Use your email or another services to continue
            </CardDescription>
            <CardContent className={'space-y-5 px-0 pb-0'}>
                <form className={'space-y-2.5'}>
                    <Input
                        disabled={false}
                        label={'Email'}
                        name={'email'}
                        value={email}
                        placeholder={'Enter your email'}
                        type={'email'}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />

                    <Input
                        disabled={false}
                        label={'Password'}
                        name={'password'}
                        value={password}
                        placeholder={'Enter your password'}
                        type={'password'}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />

                    <Input
                        disabled={false}
                        label={'Confirm Password'}
                        name={'confirm_password'}
                        value={confirmPassword}
                        placeholder={'Enter your password again'}
                        type={'password'}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                        required
                    />

                    <Button type={"submit"} className={'w-full'} size="lg" disabled={false}>
                        Continue
                    </Button>
                </form>

                <Separator/>

                <div className={'flex flex-col gap-y-2.5'}>
                    <Button
                        disabled={false}
                        onClick={() => {
                        }}
                        variant="outline"
                        size="lg"
                        className={'w-full relative'}
                    >
                        <FcGoogle className={'size-5 absolute left-2.5'}/>
                        Continue with Google
                    </Button>

                    <Button
                        disabled={false}
                        onClick={() => {
                        }}
                        variant="outline"
                        size="lg"
                        className={'w-full relative'}
                    >
                        <FaGithub className={'size-5 absolute left-2.5'}/>
                        Continue with Github
                    </Button>
                </div>

                <p className={'text-xs text-muted-foreground'}>
                    Already have an account? <span className={'text-sky-700 hover:underline cursor-pointer'}
                                                   onClick={() => setState('signIn')}>Sign In</span>
                </p>
            </CardContent>
        </Card>);
};

export default SignUpCard;
