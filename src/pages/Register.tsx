
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GalleryHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "用戶名至少需要3個字符",
  }),
  email: z.string().email({
    message: "請輸入有效的電子郵件地址",
  }),
  password: z.string().min(6, {
    message: "密碼至少需要6個字符",
  }),
  confirmPassword: z.string().min(6, {
    message: "密碼至少需要6個字符",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "兩次輸入的密碼不一致",
  path: ["confirmPassword"],
});

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "註冊成功！",
        description: "請登入您的新帳號",
      });
      navigate('/login');
    }, 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gallery-teal/30 to-gallery-gold/20 px-4 py-10">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <GalleryHorizontal size={32} className="text-gallery-red" />
            <h1 className="text-3xl font-bold font-display">
              <span className="text-gallery-red">AI</span>
              <span className="text-gray-800">畫廊</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold">建立帳號</h2>
          <p className="text-muted-foreground mt-2">加入我們的AI藝術社群</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>用戶名</FormLabel>
                  <FormControl>
                    <Input placeholder="您的用戶名" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>電子郵件</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>密碼</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>確認密碼</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-gallery-red hover:bg-gallery-red/90 mt-2" disabled={isLoading}>
              {isLoading ? "註冊中..." : "註冊"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            已經有帳號了？ 
            <Link to="/login" className="text-gallery-red hover:underline ml-1">
              立即登入
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
