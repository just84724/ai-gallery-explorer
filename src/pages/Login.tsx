
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
  email: z.string().email({
    message: "請輸入有效的電子郵件地址",
  }),
  password: z.string().min(6, {
    message: "密碼至少需要6個字符",
  }),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "登入成功！",
        description: "歡迎回到 AI畫廊",
      });
      navigate('/');
    }, 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gallery-teal/30 to-gallery-gold/20 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <GalleryHorizontal size={32} className="text-gallery-red" />
            <h1 className="text-3xl font-bold font-display">
              <span className="text-gallery-red">AI</span>
              <span className="text-gray-800">畫廊</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-bold">登入帳號</h2>
          <p className="text-muted-foreground mt-2">歡迎回來！請輸入您的帳號資料</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <Button type="submit" className="w-full bg-gallery-red hover:bg-gallery-red/90" disabled={isLoading}>
              {isLoading ? "登入中..." : "登入"}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            還沒有帳號嗎？ 
            <Link to="/register" className="text-gallery-red hover:underline ml-1">
              立即註冊
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
