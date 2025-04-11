import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">欢迎使用我们的应用</CardTitle>
          <CardDescription className="text-center">感谢您访问我们的网站</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            这是一个使用 React、TypeScript 和 Tailwind CSS 构建的现代化应用程序。您可以使用这个模板开始构建您自己的项目。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <h3 className="font-medium text-blue-700">React</h3>
              <p className="text-sm text-gray-600">用于构建用户界面</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <h3 className="font-medium text-green-700">TypeScript</h3>
              <p className="text-sm text-gray-600">类型安全的 JavaScript</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button variant="default">开始使用</Button>
          <Button variant="outline">了解更多</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;