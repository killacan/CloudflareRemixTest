import OAuthWithDiscord from "~/components/oauthdiscord";
import OAuthWithGithub from "~/components/oauthgithub";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
    Form as CustomForm, 
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form";
import { Form as RemixForm } from "@remix-run/react";
import { Input } from "~/components/ui/input";
