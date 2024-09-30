import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {SignInFlow} from "@/features/auth/types";
import React, {useState} from "react";
import {Loader, TriangleAlert} from "lucide-react";
import {useAuthActions} from "@convex-dev/auth/react";

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
}

const SignUpCard = ({setState}: SignUpCardProps) => {
    const {signIn} = useAuthActions();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [pending, setPending] = useState(false);
    const [error, setError] = useState("");

    const onPasswordSignUp = ((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Password does not match");
            return;
        }

        setPending(true);

        signIn('password', {
            name,
            email,
            password,
            flow: 'signUp'
        }).catch(() => {
            setError('Something went wrong');
        }).finally(() => {
            setPending(false);
        });
    });

    const handleProviderSignIn = (value: 'google' | 'github') => {
        setPending(true);
        signIn(value)
            .finally(() => {
                setPending(false);
            });
    };

    return (
        <Card className={'w-full h-full p-8'}>
            <CardHeader className={'px-0 pt-0'}>
                <CardTitle>
                    Sign up to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another services to continue
                </CardDescription>
            </CardHeader>

            {!!error && (
                <div
                    className={'bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'}>
                    <TriangleAlert className={'size-4'}/> <p>{error}</p>
                </div>
            )}

            <CardContent className={'space-y-5 px-0 pb-0'}>
                <form className={'space-y-2.5'} onSubmit={onPasswordSignUp}>
                    <Input
                        disabled={pending}
                        name={'name'}
                        value={name}
                        placeholder={'Enter your name'}
                        type={'text'}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        required
                    />

                    <Input
                        disabled={pending}
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
                        disabled={pending}
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
                        disabled={pending}
                        name={'confirm_password'}
                        value={confirmPassword}
                        placeholder={'Enter your password again'}
                        type={'password'}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                        required
                    />

                    <Button type={"submit"} className={'w-full'} size="lg" disabled={pending}>
                        Continue {pending ? <Loader className={'ms-2 size-4 animate-spin text-muted-foreground'}/> : null}
                    </Button>
                </form>

                <Separator/>

                <div className={'flex flex-col gap-y-2.5'}>
                    <Button
                        disabled={pending}
                        onClick={() => {
                            handleProviderSignIn('google');
                        }}
                        variant="outline"
                        size="lg"
                        className={'w-full relative'}
                    >
                        <FcGoogle className={'size-5 absolute left-2.5'}/>
                        Continue with Google
                    </Button>

                    <Button
                        disabled={pending}
                        onClick={() => {
                            handleProviderSignIn('github');
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
