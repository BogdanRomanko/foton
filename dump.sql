--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: Role; Type: TYPE; Schema: public; Owner: admin
--

CREATE TYPE public."Role" AS ENUM (
    'USER',
    'ADMIN'
);


ALTER TYPE public."Role" OWNER TO admin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ProductCategory; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."ProductCategory" (
    id integer NOT NULL,
    title text NOT NULL
);


ALTER TABLE public."ProductCategory" OWNER TO admin;

--
-- Name: ProductCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."ProductCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProductCategory_id_seq" OWNER TO admin;

--
-- Name: ProductCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."ProductCategory_id_seq" OWNED BY public."ProductCategory".id;


--
-- Name: Products; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Products" (
    id integer NOT NULL,
    title text NOT NULL,
    description text,
    image text,
    "categoryId" integer NOT NULL
);


ALTER TABLE public."Products" OWNER TO admin;

--
-- Name: Products_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Products_id_seq" OWNER TO admin;

--
-- Name: Products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;


--
-- Name: Sertificates; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Sertificates" (
    id integer NOT NULL,
    title text,
    "sertificateImage" text
);


ALTER TABLE public."Sertificates" OWNER TO admin;

--
-- Name: Sertificates_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Sertificates_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Sertificates_id_seq" OWNER TO admin;

--
-- Name: Sertificates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Sertificates_id_seq" OWNED BY public."Sertificates".id;


--
-- Name: SiteContent; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."SiteContent" (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL
);


ALTER TABLE public."SiteContent" OWNER TO admin;

--
-- Name: SiteContent_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."SiteContent_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."SiteContent_id_seq" OWNER TO admin;

--
-- Name: SiteContent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."SiteContent_id_seq" OWNED BY public."SiteContent".id;


--
-- Name: Token; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Token" (
    id integer NOT NULL,
    "user" integer NOT NULL,
    "refreshToken" text NOT NULL
);


ALTER TABLE public."Token" OWNER TO admin;

--
-- Name: Token_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Token_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Token_id_seq" OWNER TO admin;

--
-- Name: Token_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Token_id_seq" OWNED BY public."Token".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    hash text NOT NULL,
    salt text NOT NULL,
    role public."Role" NOT NULL
);


ALTER TABLE public."User" OWNER TO admin;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO admin;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO admin;

--
-- Name: ProductCategory id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."ProductCategory" ALTER COLUMN id SET DEFAULT nextval('public."ProductCategory_id_seq"'::regclass);


--
-- Name: Products id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);


--
-- Name: Sertificates id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Sertificates" ALTER COLUMN id SET DEFAULT nextval('public."Sertificates_id_seq"'::regclass);


--
-- Name: SiteContent id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."SiteContent" ALTER COLUMN id SET DEFAULT nextval('public."SiteContent_id_seq"'::regclass);


--
-- Name: Token id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Token" ALTER COLUMN id SET DEFAULT nextval('public."Token_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: ProductCategory; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."ProductCategory" (id, title) FROM stdin;
1	test
2	test
3	test2
4	1234
6	zxcvbvzxc
\.


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Products" (id, title, description, image, "categoryId") FROM stdin;
2	Тестовый товарКАРТА	Тестовое описаниеКАРТАКА!№!"!"	static/products/1716140500269--item.jpg	1
1	tet.value.input.filestet.value.input.files	tet.value.input.filestet.value.input.filestet.value.input.files	static/products/393214-samurai-warrior-sunset-fantasy-art-4k-pc-wallpaper.jpg	3
\.


--
-- Data for Name: Sertificates; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Sertificates" (id, title, "sertificateImage") FROM stdin;
\.


--
-- Data for Name: SiteContent; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."SiteContent" (id, title, content) FROM stdin;
10	kpp	940601001@
9	ogrn	1229400029935@
8	inn	9406004267@
7	adress_min	г. Алчевск, ул. Волочаевская, д. 3А@
6	adress_full	294204, Российская Федерация, ЛНР, г. Алчевск, ул. Волочаевская, д. 3А@
5	email	foton_777@mail.ru@
4	phone2	+7(959)000-00-00@
3	phone1	+7(959)114-92-393@
2	advertisement	Производство и внедрение программно-аппаратных комплексов2@
1	title	тестовая карта1"@
\.


--
-- Data for Name: Token; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Token" (id, "user", "refreshToken") FROM stdin;
1	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE3MTYxMTY2MDMsImV4cCI6MTcxNjIwMzAwM30.i5aRxJwQWVqIJe4kFsmAr0aZEeNaipqODj1tYhcTg_k
2	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE3MTYxMTg1MzAsImV4cCI6MTcxNjIwNDkzMH0.AnD6al8A_lfIIoK-Tg0NFof1LVHA811yqpyLGTXnoIs
3	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE3MTYxMTg1NDEsImV4cCI6MTcxNjIwNDk0MX0.iOmwjGa92hLucC3cl2GwNxG3wFx61nT_VBy-p6S53JI
4	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE3MTYxMTg1ODUsImV4cCI6MTcxNjIwNDk4NX0.jbx8pZ-O2Eu3XkMg6lLYbFARu0YQ_d6RWCrhsWBBE5c
5	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiJ9LCJpYXQiOjE3MTYxMTg1OTMsImV4cCI6MTcxNjIwNDk5M30.2jL-0ADL1ZA7evqvRfS4wx7a5RU008CrvRku2CYZiKM
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."User" (id, name, hash, salt, role) FROM stdin;
1	admin	bb209c6141025ab4eaf0ddccad8e02fcf1331052f83d224075bb16051644ee0c733c052b5e2751a05283f62970e2151a1912825b5d197bba6f2380748c7b201d	ddf005e2596bea43ab8869245390088d	ADMIN
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
cbeaed6f-febe-42c1-b3f9-cb10a5c1e1f3	fca1848d2c0ef12812bd76211c7fc7f50ece607d08abb58fc172971cde10981a	2024-05-19 09:44:55.132087+00	20240519094454_fonot_init	\N	\N	2024-05-19 09:44:55.006441+00	1
\.


--
-- Name: ProductCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."ProductCategory_id_seq"', 6, true);


--
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Products_id_seq"', 2, true);


--
-- Name: Sertificates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Sertificates_id_seq"', 1, false);


--
-- Name: SiteContent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."SiteContent_id_seq"', 10, true);


--
-- Name: Token_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Token_id_seq"', 5, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."User_id_seq"', 5, true);


--
-- Name: ProductCategory ProductCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."ProductCategory"
    ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY (id);


--
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- Name: Sertificates Sertificates_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Sertificates"
    ADD CONSTRAINT "Sertificates_pkey" PRIMARY KEY (id);


--
-- Name: SiteContent SiteContent_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."SiteContent"
    ADD CONSTRAINT "SiteContent_pkey" PRIMARY KEY (id);


--
-- Name: Token Token_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Token"
    ADD CONSTRAINT "Token_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_name_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "User_name_key" ON public."User" USING btree (name);


--
-- Name: Products Products_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."ProductCategory"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

