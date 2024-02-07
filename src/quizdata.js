export const quizData = [
	{
	id: 1,
	question: `あなたが所属する企業はAWS Direct Connectを導入して、オフプレミスのネットワークをAWS VPCにリンクさせています。AWSのリソースに関するDNSレコードはRoute 53プライベートホステッドゾーンを使って制御しています。現在、オフプレミスネットワークからのDNSクエリーをRoute 53リゾルバにフォワードし、Route 53プライベートホステッドゾーン内のレコードをオフプレミスネットワークで解釈できるようにしたいと思っています。以下の行動の中から、上記の要求を満たすためにふさわしいのはどれでしょうか？`,
	options: [`オフプレミスネットワークのリゾルバーを設定して、DNSのリクエストをRoute 53リゾルバーのドメイン名やIPアドレスへとフォワードします。`, `VPC内でRoute 53リゾルバーのインバウンドエンドポイントを作り、オフプレミスネットワークのリゾルバーを設定して、DNSのリクエストをインバウンドエンドポイントへとフォワードします。`, `VPC内でRoute 53リゾルバーのアウトバウンドエンドポイントを作り、一つ以上のルールを設定して、オフプレミスネットワークからのリゾルバーをRoute 53にフォワードするDNSクエリのドメイン名を指定します。`, `すべてのRoute 53ドメイン名をRoute 53リゾルバーに含むようにして、リゾルバーが自動的にドメイン名を解釈し、オフプレミスネットワークからのDNSクエリーに応えるようにします。`],
	multipleAnswers: false,
	correctAnswers: [`VPC内でRoute 53リゾルバーのインバウンドエンドポイントを作り、オフプレミスネットワークのリゾルバーを設定して、DNSのリクエストをインバウンドエンドポイントへとフォワードします。`],
	explanation: `選択肢Aは正解ではありません。なぜなら、Route 53 Resolverサービスは、オフプレミスネットワークのDNSリゾルバーが設定できるドメイン名やIPアドレスを提供出来ないからです。

選択肢Bは正解です。なぜなら、DNSのクエリをRoute 53リゾルバーに伝送するときは、Route 53リゾルバーのインバウンドエンドポイントと結び付ける必要があり、その後にオフプレミスのリゾルバーを設定してクエリーをインバウンドエンドポイントにフォワードするからです。

選択肢Cは不正解です。なぜなら、Route 53リゾルバーのアウトバウンドエンドポイントは、DNSのクエリ💡をAWS VPCからオフプレミスネットワークに送出する際に使います。このシナリオの場合には、インバウンドエンドポイントを用いるべきです。

選択肢Dは不正解です。なぜなら、インバウンドエンドポイントが無ければ、Route 53リゾルバーは自動的にオフプレミスネットワークからの受け入れられたDNSクエリーを送ることができません。また、Route 53リゾルバーにすべてのRoute 53ドメイン名を含むという処理方法は存在しません。`,
	subQuestions: [{
		id: 1,
		question: `AWS Direct Connectの概念とは何ですか？`,
		options: [`AWSのクラウドに対する高速かつ直接的な接続を提供します。`, `オフプレミスからAmazon S3のみへの専用接続を提供します。`, `Dedicated AWSのGPUエンドポイントへの接続を提供します。`, `AWSのネットワークをオフプレミスデバイスに拡張します。`],
		multipleAnswers: false,
		correctAnswers: [`AWSのクラウドに対する高速かつ直接的な接続を提供します。`],
		explanation: `AWS Direct Connectは、AWSのクラウドへの高速かつ直接的な接続を提供します。このサービスを使用すると、インターネットを使用せずにAWSへの接続が可能となり、ネットワークパフォーマンスの向上や通信コストの削減が期待できます。`
	}, {
		id: 2,
		question: `Route 53のプライベートホステッドゾーンとは何ですか？`,
		options: [`インターネット上で公開されているDNSゾーンのこと。`, `プライベートネットワーク内で使用するためのDNSゾーンのこと。`, `Route 53サービス内のすべてのDNSゾーンをまとめたもの。`, `VPC内のリソースのみがアクセス可能なDNSゾーンのこと。`],
		multipleAnswers: false,
		correctAnswers: [`プライベートネットワーク内で使用するためのDNSゾーンのこと。`],
		explanation: `Route 53のプライベートホステッドゾーンは、プライベートネットワーク内で使用されるDNSゾーンのことを指します。これは、特定のネットワーク内からのみアクセス可能なDNSリゾルバーを提供します。このゾーン内のDNSレコードは、そのネットワーク内からのみ解決可能です。`
	}, {
		id: 3,
		question: `Route 53リゾルバのインバウンドエンドポイントとは何ですか？`,
		options: [`外部ネットワークからのDNSクエリをAWS内のリソースに転送するエンドポイント。`, `AWSのリソースから外部ネットワークへのDNSクエリを転送するエンドポイント。`, `AWSのVPCから別のVPCへのDNSクエリを転送するエンドポイント。`, `AWSのリソースから別のAWSリソースへのDNSクエリを転送するエンドポイント。`],
		multipleAnswers: false,
		correctAnswers: [`外部ネットワークからのDNSクエリをAWS内のリソースに転送するエンドポイント。`],
		explanation: `Route 53リゾルバのインバウンドエンドポイントは、外部ネットワークからのDNSクエリをAWS内のリソースに転送するエンドポイントのことを指します。これにより、オフプレミスネットワークからAWS内のリソースに対するDNSクエリの解決が可能になります。`
	}, {
		id: 4,
		question: `Route 53リゾルバのアウトバウンドエンドポイントとは何ですか？`,
		options: [`AWSのリソースから外部ネットワークへのDNSクエリを転送するエンドポイント。`, `外部ネットワークからのDNSクエリをAWS内のリソースに転送するエンドポイント。`, `AWSのVPCから別のVPCへのDNSクエリを転送するエンドポイント。`, `AWSのリソースから別のAWSリソースへのDNSクエリを転送するエンドポイント。`],
		multipleAnswers: false,
		correctAnswers: [`AWSのリソースから外部ネットワークへのDNSクエリを転送するエンドポイント。`],
		explanation: `Route 53リゾルバのアウトバウンドエンドポイントは、AWSのリソースから外部ネットワークへのDNSクエリを転送するエンドポイントのことを指します。これにより、AWS内のリソースからオフプレミスネットワークのDNSリソースに対するDNSクエリの解決が可能になります。`
	}, {
		id: 5,
		question: `DNSリゾルバとは何ですか？`,
		options: [`DNSクエリを解決するためのサーバーもしくはサービス。`, `DNSレコードを管理するためのソフトウェアツール。`, `ネットワーク接続を提供するためのハードウェアデバイス。`, `ネットワーク内の全てのデバイスを管理するソフトウェアツール。`],
		multipleAnswers: false,
		correctAnswers: [`DNSクエリを解決するためのサーバーもしくはサービス。`],
		explanation: `DNSリゾルバとは、DNSクエリを解決するためのサーバーもしくはサービスのことを指します。これは、ドメイン名をIPアドレスに変換するプロセスを担当します。DNSリゾルバは通常、ISP（インターネットサービスプロバイダ）や大きな組織によって運用され、ユーザーがウェブブラウザでURLを入力した時に、適切なサイトに接続するために用いられます。`
	}]
}, {
	id: 2,
	question: `大手企業のAWSソリューションアーキテクトとして、VPN接続を介してAWS VPCと自社のオンプレミスネットワークをリンクしています。オンプレミスネットワークには、複数のドメインネームを管理するDNSリゾルバが存在します。今、VPCのAWSリソース（例、EC2インスタンス）にそれらのドメイン名を解決できるようにする方法を模索しています。以下の選択肢の中から、この要件を満たすものを2つ選択してください。`,
	options: [`AWS Route 53のプライベートホストゾーンのNSレコードに、オンプレミスのDNSリゾルバを追加します。`, `各ドメイン名に対し、AWS Route 53 ResolverでAレコードを作り、その値にオンプレミスのDNSリゾルバのIPを設定します。`, `AWSのVPCのAWS Route 53 Resolverでアウトバウンドエンドポイントを生成します。`, `AWS VPCのデフォルトルートテーブルを用いて、全てのDNSクエリをオンプレミスのDNSリゾルバのドメイン名に転送するルートを作ります。`, `AWS Route 53 Resolverで、どのDNSクエリをオンプレミスネットワークのDNSリゾルバに転送するかを指定するルールを作ります。`],
	multipleAnswers: true,
	correctAnswers: [`AWSのVPCのAWS Route 53 Resolverでアウトバウンドエンドポイントを生成します。`, `AWS Route 53 Resolverで、どのDNSクエリをオンプレミスネットワークのDNSリゾルバに転送するかを指定するルールを作ります。`],
	explanation: `選択肢Aは間違いです。問題ではAWS Route 53プライベートホストゾーンの使用については言及されておらず、また、オンプレミスのDNSリゾルバをNSレコードとして追加することはできません。

選択肢Bも間違いです。AWS Route 53リゾルバでは、ドメイン名に対してAレコードを作成することはできません。DNSクエリを他のネットワークに転送するには、エンドポイントとルールを設定する必要があります。

選択肢Cは正しい答えです。AWS VPCからオンプレミスネットワークへのDNSクエリを転送するために、アウトバウンドエンドポイントが必要となります。

選択肢Dは間違っています。ルートテーブルはDNSクエリを転送する方法を指定するものではありません。DNSクエリの解決には、VPCと他のネットワーク間でのルート53リゾルバの使用が必要となります。

選択肢Eは正しい答えです。アウトバウンドエンドポイントと併せて使うことで、特定のドメイン名のDNSクエリをどのようにオンプレミスのDNSリゾルバに転送するかを決定するルールを定義できます。`,

	subQuestions: [{
		id: 1,
		question: `AWSのサービスの中で、オンプレミスのネットワークとAWSのVPCをVPN接続でつなぐことができるサービスを選びなさい。`,
		options: [`AWS Direct Connect`, `Amazon Connect`, `AWS VPN`, `Amazon VPC`],
		multipleAnswers: false,
		correctAnswers: [`AWS VPN`],
		explanation: `AWS VPNを利用することで、オンプレミスのネットワークとAWS VPCをVPN接続でリンクできます。AWS Direct Connectは専用線接続、Amazon Connectはクラウドベースのコンタクトセンターサービスを提供します。Amazon VPC自体は仮想ネットワーキング環境を提供しますが、VPN接続を実現するのは、具体的なサービスとしてはAWS VPNとなります。`
	}, {
		id: 2,
		question: `AWSのサービスの中で、オンプレミスネットワークのDNSリゾルバが管理するドメイン名をVPCのリソースが解決できるようにするサービスを選びなさい。`,
		options: [`AWS Route 53`, `AWS CloudFront`, `Amazon Connect`, `AWS Direct Connect`],
		multipleAnswers: false,
		correctAnswers: [`AWS Route 53`],
		explanation: `AWS Route 53サービスは、DNSとドメイン登録を管理するためのサービスであり、オンプレミスネットワークのDNSリゾルバが管理するドメイン名を、VPCのリソースが解決できるような設定が可能です。AWS CloudFrontはCDNサービス、Amazon Connectはコンタクトセンターのサービス、AWS Direct Connectは専用線接続のサービスです。`
	}, {
		id: 3,
		question: `AWS Route 53の機能の中で、特定のドメイン名のDNSクエリをオンプレミスのDNSリゾルバに転送するルールを作ることができる機能を選びなさい。`,
		options: [`ゾーニングルール`, `ゾーン転送`, `リゾルバルール`, `トラフィックフローポリシー`],
		multipleAnswers: false,
		correctAnswers: [`リゾルバルール`],
		explanation: `AWS Route 53 Resolverのリゾルバルール機能を使用することで、特定のドメイン名のDNSクエリをオンプレミスのDNSリゾルバに転送するルールを作ることができます。ゾーニングルールやゾーン転送、トラフィックフローポリシーはAWS Route 53の存在しない機能名です。`
	}, {
		id: 4,
		question: `AWS Route 53 Resolverの機能の中で、VPCからオンプレミスネットワークへのDNSクエリを転送するために必要な機能を選びなさい。`,
		options: [`アウトバウンドエンドポイント`, `フォワードルックアップゾーン`, `リバースルックアップゾーン`, `トラフィックフローポリシー`],
		multipleAnswers: false,
		correctAnswers: [`アウトバウンドエンドポイント`],
		explanation: `AWS Route 53 Resolverのアウトバウンドエンドポイントを生成することで、VPCからオンプレミスネットワークへのDNSクエリを転送することができます。フォワードルックアップゾーンやリバースルックアップゾーン、トラフィックフローポリシーは、AWS Route 53やその他のAWSサービスの存在しない機能名です。`
	}, {
		id: 5,
		question: `AWSのVPCのデフォルトルートテーブルを用いて、全てのDNSクエリをオンプレミスのDNSリゾルバのドメイン名に転送する設定は可能か。`,
		options: [`可能`, `不可能`],
		multipleAnswers: false,
		correctAnswers: [`不可能`],
		explanation: `AWSのVPCのデフォルトルートテーブルは、ネットワークトラフィックをどのサブネットやネットワークインターフェースにルーティングするかを設定します。しかし、それはDNSクエリのルーティングではなく、ネットワークパケットのルーティングを行います。したがって、DNSクエリを特定のドメイン名に転送する設定はルートテーブルでは行えません。このような設定は、AWS Route 53リゾルバルールを使用します。`
	}]
}, {
	id: 3,
	question: `あなたは保険業界の会社で、AWSソリューションアーキテクトとして勤務しています。社内の複数のデータベースをAWSへ移行する計画があります。これらのデータベースはオンプレミス環境で、いくつかの異なるサービスとアプリケーションを提供するために様々な設定で動作しています。次の状況のうち、Amazon RDSではなくAmazon EC2上でデータベースを稼働するべきはどれでしょうか？`,
	options: [`すべての設定（システムユーザーアクセスを含む）を自分ですべて管理したい場合。`, `データベースが自動的にセキュリティパッチを適用し、新しいデータベースバージョンにアップグレードできるようにしたい場合。`, `レガシーアプリケーションで、旧式のOracleデータベース（つまり、Oracle Database 11g）が必要な場合。`, `データベースが自動的にディスク使用量、読み書きのIOPs、ネットワークスループットなどのメトリックを取得してほしい場合。`, `Oracleデータベース（バージョン19c）が高い可用性を必要とし、複数の可用性ゾーンで同期的なレプリケーションが簡単にできるようにしたい場合。`],
	multipleAnswers: true,
	correctAnswers: [`すべての設定（システムユーザーアクセスを含む）を自分ですべて管理したい場合。`, `レガシーアプリケーションで、旧式のOracleデータベース（つまり、Oracle Database 11g）が必要な場合。`],
	explanation: `選択肢A、Amazon RDSはマネージドデータベースサービスで、全ての管理を自分で行うことはできません。データベースに対して詳細な設定が必要な場合は、Amazon EC2でデータベースを管理することを推奨します。選択肢B、Amazon RDSでは自動的なパッチ適用やアップグレードが可能であるため、この要求がある場合は、Amazon RDSを選ぶべきです。選択肢C、RDS for Oracleは一部のOracleバージョンしかサポートしておらず、古いバージョンのOracleデータベースが必要な場合は、EC2インスタンス上でデータベースを動かすことを提案します。選択肢D、Amazon RDSはCloudWatchを使用して自動的に各種メトリクスを提供します。これにより、使用者はこれらの設定を自分で行う必要がありません。したがって、このシナリオではAmazon RDSを推奨します。選択肢E、Amazon RDSは高可用性を提供し、Multi-AZレプリケーションを簡単に設定できます。したがって、このシナリオではAmazon RDSを推奨します。`,
	subQuestions: [{
		id: 1,
		question: `AWSのマネージドデータベースサービスとは何ですか？`,
		options: [`ユーザーが自身で全ての設定を行うデータベースサービス`, `AWSが管理するデータベースサービス`, `必要に応じて自動スケーリングするデータベースサービス`, `リアルタイムでデータを分析するデータベースサービス`],
		multipleAnswers: false,
		correctAnswers: [`AWSが管理するデータベースサービス`],
		explanation: `AWSのマネージドデータベースサービスとは、ユーザーがサーバやデータベースエンジンの運用に必要な作業をAWSに委ねることができるデータベースサービスを指します。これにより、ユーザーはアプリケーション開発やビジネスに集中できます。`
	}, {
		id: 2,
		question: `Amazon RDSで自動パッチ適用やバージョンアップグレードは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`はい`],
		explanation: `Amazon RDSでは、データベースのパッチを自動的に適用したり、新しいデータベースバージョンにアップグレードしたりすることができます。これにより、ユーザーはデータベースの運用管理を気にせず、アプリケーション開発に集中できます。`
	}, {
		id: 3,
		question: `旧式のOracleデータベースをAWSで稼働させるためにはどのサービスを使うべきですか？`,
		options: [`Amazon RDS`, `Amazon EC2`, `Amazon S3`, `Amazon Athena`],
		multipleAnswers: false,
		correctAnswers: [`Amazon EC2`],
		explanation: `Amazon RDS for Oracleは一部のOracleバージョンしかサポートしておらず、古いバージョンのOracleデータベースが必要な場合は、Amazon EC2インスタンス上でデータベースを動かすことを推奨します。`
	}, {
		id: 4,
		question: `データベースの各種メトリクスはどのサービスを使って取得できますか？`,
		options: [`Amazon CloudWatch`, `Amazon QuickSight`, `AWS Data Pipeline`, `AWS Glue`],
		multipleAnswers: false,
		correctAnswers: [`Amazon CloudWatch`],
		explanation: `Amazon RDSはCloudWatchを使用して自動的に各種メトリクスを提供します。これにより、使用者はこれらの設定を自分で行う必要がありません。`
	}, {
		id: 5,
		question: `高い可用性を必要とし、複数の可用性ゾーンで同期的なレプリケーションが必要なデータベースはどのサービスを使うべきですか？`,
		options: [`Amazon RDS`, `Amazon EC2`, `Amazon Neptune`, `Amazon DynamoDB`],
		multipleAnswers: false,
		correctAnswers: [`Amazon RDS`],
		explanation: `Amazon RDSは高可用性を提供し、Multi-AZレプリケーションを簡単に設定できます。したがって、このシナリオではAmazon RDSを推奨します。`
	}]
}, {
	id: 4,
	question: `あなたは大企業でAWSのアドバイザーとして働いています。この企業はオンプレミスのデータセンターにたくさんのサーバーを所有し、それらを全てAWSプラットフォームに移植することを計画しています。そのワークロードには、SQLサーバー、Javaウェブアプリケーション、カスタム開発されたソフトウェアなどが含まれており、Windows、CentOS、Debian、Ubuntuといった多種多様のオペレーティングシステムを使用しています。移行プロセスを簡単かつ迅速に進めるための自動化されたリフト＆シフトソリューションを設計する責任があなたにあります。以下の選択肢のうち、最も適切なものは何でしょうか？`,
	options: [`AWSのサーバーマイグレーションサービスを活用して、サーバーをAmazon S3へファイルとしてダンプし、そのファイルを使って新たなEC2インスタンスやLambda関数を起動します。`, `AWSアプリケーションディスカバリーサービスを利用して移行エージェントを設置し、リフト＆シフトでアプリケーションをAWSへ移動します。その上で、AWS DataSyncを使って増分スナップショットに基づいたレプリケーションを自動化する。`, `ソースとなるサーバーにAWS Replication Agentを取り付けてAWSアプリケーションマイグレーションサービスへ追加し、以降はアプリケーションマイグレーションサービスを活用して、サーバーをAWSへ自動的に変換し起動します。`, `AWS Transfer Familyサービスを利用し、マイグレーションエージェントとレプリケーションのためのステージングサーバーを設定します。これにより、オンプレミスのサーバーをAWS EC2インスタンスに自動的に移行する。`],
	multipleAnswers: false,
	correctAnswers: [`ソースとなるサーバーにAWS Replication Agentを取り付けてAWSアプリケーションマイグレーションサービスへ追加し、以降はアプリケーションマイグレーションサービスを活用して、サーバーをAWSへ自動的に変換し起動します。`],
	explanation: `選択肢Aは間違っています。AWS Application Migration Serviceは、リフト&シフトのマイグレーション用途で主要なマイグレーションサービスとして推奨されています。逆に、AWS Server Migration ServiceはS3のファイルにサーバー情報をダンプすることはありません。

選択肢Bは誤りです。Application Discovery Serviceは、オンプレミスの情報収集を通じたAWSへの移行計画支援を目的としています。このサービス自体がアプリケーションをAWSへリフト&シフトするわけではありません。加えて、AWS DataSyncは、オンプレミスとAWS間のストレージデータ転送を手助けします。AWS DataSyncがApplication Discovery Serviceと結びついて、アプリケーションを移行する機能はありません。

選択肢Cが正解です。AWS Application Migration Serviceは、高度に自動化されたリフト&シフトのマイグレーションに適しているサービスです。このサービスを使用すれば、ユーザーは元となるサーバーを管理し、全体のサーバーを自動でレプリケーションでき、テスト可能となり、準備ができ次第、カットオーバーを実行することが可能です。

選択肢Dは不正解です。AWS Transfer Familyは、SFTP、AS2、FTPS、FTPをベースとしたワークフローをAWSへ移行するためのサービスです。それ自体がソフトウェアアプリケーションやサーバーをAWSへ複製する機能は保有していません。`,
	subQuestions: [{
		id: 1,
		question: `AWSでオンプレミスのサーバーを移行する際に主に使うマイグレーションサービスは何でしょうか？`,
		options: [`AWS DataSync`, `AWS Application Migration Service`, `AWS Transfer Family`, `AWS Application Discovery Service`],
		multipleAnswers: false,
		correctAnswers: [`AWS Application Migration Service`],
		explanation: `AWS Application Migration Serviceは、リフト&シフトのマイグレーション用途で主要なマイグレーションサービスとして推奨されています。`
	}, {
		id: 2,
		question: `AWS Application Discovery Serviceの主な目的は何でしょうか？`,
		options: [`オンプレミスの情報収集を通じたAWSへの移行計画支援`, `ステージングサーバーの設定`, `AWSへのアプリケーションのリフト&シフト`, `ストレージデータ転送を手助けすること`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスの情報収集を通じたAWSへの移行計画支援`],
		explanation: `Application Discovery Serviceは、オンプレミスの情報収集を通じたAWSへの移行計画支援を目的としています。このサービス自体がアプリケーションをAWSへリフト&シフトするわけではありません。`
	}, {
		id: 3,
		question: `AWS DataSyncの主な目的は何でしょうか？`,
		options: [`オンプレミスとAWS間のストレージデータ転送を手助けすること`, `オンプレミスの情報収集を通じたAWSへの移行計画支援`, `AWSへのアプリケーションのリフト&シフト`, `ステージングサーバーの設定`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスとAWS間のストレージデータ転送を手助けすること`],
		explanation: `AWS DataSyncは、オンプレミスとAWS間のストレージデータ転送を手助けすることが主な目的です。`
	}, {
		id: 4,
		question: `AWS Transfer Familyの主な使い道は何でしょうか？`,
		options: [`SFTP、AS2、FTPS、FTPをベースとしたワークフローをAWSへ移行すること`, `オンプレミスの情報収集を通じたAWSへの移行計画支援`, `AWSへのアプリケーションのリフト&シフト`, `オンプレミスとAWS間のストレージデータ転送を手助けすること`],
		multipleAnswers: false,
		correctAnswers: [`SFTP、AS2、FTPS、FTPをベースとしたワークフローをAWSへ移行すること`],
		explanation: `AWS Transfer Familyは、SFTP、AS2、FTPS、FTPをベースとしたワークフローをAWSへ移行するためのサービスです。それ自体がソフトウェアアプリケーションやサーバーをAWSへ複製する機能は保有していません。`
	}, {
		id: 5,
		question: `AWS Application Migration Serviceの主な機能とは何でしょうか？`,
		options: [`元となるサーバーを管理し、全体のサーバーを自動でレプリケーションでき、テスト可能となり、準備ができ次第、カットオーバーを実行すること`, `オンプレミスの情報収集を通じたAWSへの移行計画支援`, `ステージングサーバーの設定`, `オンプレミスとAWS間のストレージデータ転送を手助けすること`],
		multipleAnswers: false,
		correctAnswers: [`元となるサーバーを管理し、全体のサーバーを自動でレプリケーションでき、テスト可能となり、準備ができ次第、カットオーバーを実行すること`],
		explanation: `AWS Application Migration Serviceは、高度に自動化されたリフト&シフトのマイグレーションに適しているサービスです。このサービスを使用すれば、ユーザーは元となるサーバーを管理し、全体のサーバーを自動でレプリケーションでき、テスト可能となり、準備ができ次第、カットオーバーを実行することが可能です。`,
	}]
}, {
	id: 5,
	question: `あなたはAWSソリューションアーキテクトとして活動しており、組織にはAWSクラウド上で実行するためのいくつかの新規プロジェクトがあります。開発チームはどのAWSデータベースサービスを利用すべきか質問してきました。次のケースのうち、どれをAuroraサーバーレスとしてのデータベースサービスを推奨しますか？(2つ選択してください）`,
	options: [`Javaベースのアプリケーションのリレーショナルデータベース。ピーク時のデータベースの活用は予測が難しい。データベースのスケーリングを自動的に行い、手動で容量を管理する必要を排除したい。`, `ゲームのリーダーボードにかかるマイクロ秒レベルのレイテンシとキャッシング能力を備えた高性能なインメモリデータストア。`, `eコマースシステムのキーバリューストレージのための高速で柔軟な、そして高性能なデータベース。`, `アプリケーション利用データの保管にMySQL互換のデータベース。ワークロードは一定で予測可能です。DBインスタンスクラスはメモリに最適化されるべきです。`, `あまり利用されていない概念検証プロジェクトのMySQLデータベース。データベースの使用量により、秒単位での課金を希望。`],
	multipleAnswers: true,
	correctAnswers: [`Javaベースのアプリケーションのリレーショナルデータベース。ピーク時のデータベースの活用は予測が難しい。データベースのスケーリングを自動的に行い、手動で容量を管理する必要を排除したい。`, `あまり利用されていない概念検証プロジェクトのMySQLデータベース。データベースの使用量により、秒単位での課金を希望。`],
	explanation: `選択肢AとEが正解です。

選択肢Aは正解です。Aurora Serverlessは、Amazon Auroraのオンデマンド自動スケーリングコンフィギュレーションです。ユーザーが容量の範囲を指定するだけで、Auroraが監視と容量調整を自動化してくれます。選択肢Aの要件にAurora Serverlessは見事に対応します。

選択肢Bは不適切です。このシナリオでは、データストアは低レイテンシとインメモリ機能を必要としています。これに最も適しているのはAmazon ElastiCacheです。

選択肢Cは不適切です。キーバリューストレージを保存するためにはNoSQLデータベースを使用するべきです。Amazon DynamoDBは完全に管理された、サーバーレスのキーバリュー型NoSQLデータベースで、そのまま使用できます。

選択肢Dは不適切です。このオプションでは、データベースのワークロードが一定でかつ予測可能です。そのため、Aurora ServerlessよりもAuroraの方が適しています。また、Aurora Serverlessを使用すると、ユーザーはメモリ最適化型のDBインスタンスクラスを選択できません。

選択肢Eは正解です。Amazon AuroraはMySQLとPostgreSQLのデータベースをサポートしています。Aurora Serverlessを使用すると、利用したデータベースリソースのみを課金されます。したがって、選択肢EのシナリオにはAurora Serverlessが適しています。`,
	subQuestions: [{
		id: 1,
		question: `Aurora Serverlessはどのようなケースで推奨されますか？`,
		options: [`予測が難しいピーク時のデータベースの活用があるシステム`, `一定で予測可能なワークロードがあるシステム`, `高性能なインメモリデータストアが必要なシステム`, `高速で柔軟な、キーバリューストレージが必要なシステム`],
		multipleAnswers: true,
		correctAnswers: [`予測が難しいピーク時のデータベースの活用があるシステム`],
		explanation: `Aurora Serverlessは容量の指定のみで、Amazon Auroraが監視と容量調整を自動化してくれます。したがって、予測が難しいピーク時のデータベースの活用があるシステムには適しています。`
	}, {
		id: 2,
		question: `低レイテンシとインメモリ機能を必要とするデータストアに最適なAWSサービスは何ですか？`,
		options: [`Aurora Serverless`, `Amazon ElastiCache`, `Amazon DynamoDB`, `Amazon RDS`],
		multipleAnswers: false,
		correctAnswers: [`Amazon ElastiCache`],
		explanation: `データストアが低レイテンシとインメモリ機能を必要とする場合、最適なAWSサービスはAmazon ElastiCacheです。`
	}, {
		id: 3,
		question: `キーバリューストレージを保存するためにはどのようなデータベースを使用すべきですか？`,
		options: [`リレーショナルデータベース`, `NoSQLデータベース`, `グラフデータベース`, `時系列データベース`],
		multipleAnswers: false,
		correctAnswers: [`NoSQLデータベース`],
		explanation: `キーバリューストレージを保存するためには、NoSQLデータベースを使用すべきです。Amazon DynamoDBは完全に管理された、サーバーレスのキーバリュー型NoSQLデータベースです。`
	}, {
		id: 4,
		question: `予測可能な持続的なワークロードがあるシステムにはどのようなAWSデータベースサービスを推奨しますか？`,
		options: [`Aurora Serverless`, `Amazon ElastiCache`, `Amazon DynamoDB`, `Aurora`],
		multipleAnswers: false,
		correctAnswers: [`Aurora`],
		explanation: `データベースのワークロードが一定でかつ予測可能なシステムには、Auroraが適しています。`
	}, {
		id: 5,
		question: `あまり使用されていない概念検証プロジェクトのデータベースにはどのAWSサービスを推奨しますか？`,
		options: [`Aurora Serverless`, `Amazon ElastiCache`, `Amazon DynamoDB`, `Aurora`],
		multipleAnswers: false,
		correctAnswers: [`Aurora Serverless`],
		explanation: `Amazon Aurora Serverlessを使用すると、利用したデータベースリソースのみを課金されます。したがって、あまり使用されていない概念検証プロジェクトのデータベースにはAurora Serverlessが適しています。`
	}]
}, {
	id: 6,
	question: `貴社のチームは、開発用（dev）と製品用（prod）の2つのAWSアカウントを所有しています。新しいアプリケーションのCI/CDパイプラインをこれら2つのアカウントで設定しています。開発用アカウントのS3バケットには、AWS KMSによって暗号化されたソフトウェアパッケージが格納され、そのキーは開発用アカウントが保有しています。製品用アカウントへこれらのファイルを配布するためには、開発用アカウントのKMSキーを使用するために製品用アカウントに適切なIAMロールを設定する必要があります。以下の選択肢のうち、要件を満たすために必要な設定はどれでしょうか？`,
	options: [`A. 開発用アカウントのAWS KMSキーのポリシーで、「arn：aws：iam::222222222222：root」を指す製品用アカウントに対し「kms：*」のアクションを許可します。`, `B. 製品用アカウントのIAMロールで、KMSキーがそのロールを使用できるように、KMSキーのARNを信頼できるエンティティとし、製品用ロールの使用を許可します。`, `C. 製品用アカウントのIAMロールで、開発用アカウントのKMSキーのARNを「Principal」と設定し、「kms：*」のアクションを許可します。`, `D. 開発用アカウントのAWS KMSキーのポリシーで、キーユーザーとしてキーを使用するために製品用アカウントを許可します。ポリシーは以下の通りです：{"Sid":"このKMSキーの使用を許可する外部アカウント","Effect":"Allow","Principal":{"AWS":["arn:aws:iam::222222222222:root"]},"Action":["kms:Encrypt","kms:Decrypt","kms:ReEncrypt*","kms:GenerateDataKey*","kms:DescribeKey"],"Resource":"*"}`],
	multipleAnswers: false,
	correctAnswers: [`D. 開発用アカウントのAWS KMSキーのポリシーで、キーユーザーとしてキーを使用するために製品用アカウントを許可します。ポリシーは以下の通りです：{"Sid":"このKMSキーの使用を許可する外部アカウント","Effect":"Allow","Principal":{"AWS":["arn:aws:iam::222222222222:root"]},"Action":["kms:Encrypt","kms:Decrypt","kms:ReEncrypt*","kms:GenerateDataKey*","kms:DescribeKey"],"Resource":"*"}`],
	explanation: `選択肢Dが正解です。製品用アカウントから開発用KMSキーを使用するためには、キーポリシーを設定し、製品用アカウントがキーユーザーとしてキーを使用できるように許可する必要があります。製品用アカウントに適切な権限を提供するために以下のキーポリシーが適切です。

選択肢Aは不正解です。キーポリシーのアクションを「kms：*」に設定すると、必要以上の権限を製品用アカウントに提供することになります。

選択肢Bは不正解です。「信頼できるエンティティ」には「arn:aws:iam::222222222222:root」ではなく、開発用アカウントの「arn:aws:iam::111111111111:root」を設定すべきです。

選択肢Cも不正解です。IAMロールにはキーポリシーを追加することはできません。また、「kms:*」は不必要な権限を付与するため不適切です。

参考リンク：https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html`,
	subQuestions: [{
		id: 1,
		question: `AWS KMSキーのポリシーに、「arn：aws：iam::222222222222：root」を指す製品用アカウントに対し「kms：*」のアクションを許可するとどうなりますか？`,
		options: [`A. 製品用アカウントは開発用アカウントのKMSキーを全てのアクションで使用できるようになります。`, `B. 製品用アカウントは開発用アカウントのKMSキーを使用できるようになりますが、アクションは限定されます。`, `C. 開発用アカウントは製品用アカウントのKMSキーを全てのアクションで使用できるようになります。`, `D. 開発用アカウントは製品用アカウントのKMSキーを使用できるようになりますが、アクションは限定されます。`],
		multipleAnswers: false,
		correctAnswers: [`A. 製品用アカウントは開発用アカウントのKMSキーを全てのアクションで使用できるようになります。`],
		explanation: `「kms:*」と設定することで、製品用アカウントは開発用アカウントのKMSキーを全てのアクションで使用できるようになります。しかし、これは必要以上の権限を製品用アカウントに 与えることになるためセキュリティ上不適切です。`
	}, {
		id: 2,
		question: `IAMロールの信頼できるエンティティにKMSキーのARNを設定するとどうなりますか?`,
		options: [`A. KMSキーはそのロールを使用できるようになります。`, `B. KMSキーとロールとの間で信頼関係が築かれます。`, `C. KMSキーはそのロールに対して全てのアクションを許可します。`, `D. ロールはそのKMSキーを使用する全てのアクションを許可します。`],
		multipleAnswers: false,
		correctAnswers: [`A. KMSキーはそのロールを使用できるようになります。`],
		explanation: `IAMロールの信頼できるエンティティにKMSキーのARNを設定することで、そのKMSキーは当該ロールを使用できるようになります。`
	}, {
		id: 3,
		question: `IAMロールにKMSキーのARNを「Principal」と設定し、「kms：*」のアクションを許可するとどうなりますか?`,
		options: [`A. ロールがそのKMSキーを全てのアクションで使用できるようになります。`, `B. KMSキーがそのロールを全てのアクションで使用できるようになります。`, `C. ロールがそのKMSキーを限定されたアクションで使用できるようになります。`, `D. KMSキーがそのロールを限定されたアクションで使用できるようになります。`],
		multipleAnswers: false,
		correctAnswers: [`A. ロールがそのKMSキーを全てのアクションで使用できるようになります。`],
		explanation: `IAMロールにKMSキーのARNを「Principal」と設定し、「kms：*」のアクションを許可すると、当該ロールは該当KMSキーを全てのアクションで使用できるようになります。しかし、これは不必要な権限をつけることを意味するため不適切です。`
	}, {
		id: 4,
		question: `KMSキーのポリシーで、キーユーザーとしてキーを使用するために外部のアカウントを許可するとどうなりますか?`,
		options: [`A. 外部アカウントは該KMSキーを全てのアクションで使用できるようになります。`, `B. 外部アカウントは該KMSキーを限定されたアクションで使用できるようになります。`, `C. 外部アカウントはその他のKMSキーを全てのアクションで使用できるようになります。`, `D. 外部アカウントはその他のKMSキーを限定されたアクションで使用できるようになります。`],
		multipleAnswers: false,
		correctAnswers: [`B. 外部アカウントは該KMSキーを限定されたアクションで使用できるようになります。`],
		explanation: `KMSキーのポリシーでキーユーザーとして外部アカウントを許可すると、その外部アカウントは該当のKMSキーを許可されたアクション範囲内で使用することができます。`
	}, {
		id: 5,
		question: `KMSキーのポリシーにキーユーザーとして外部アカウントの許可を与える際に、「"kms:Encrypt","kms:Decrypt","kms:ReEncrypt*","kms:GenerateDataKey*","kms:DescribeKey"」などのアクションを含める理由は何ですか?`,
		options: [`A. これらの操作がセキュリティを保つ上で最も重要だからです。`, `B. これらの操作が外部アカウントからのKMSキーの使用を制御するために必要だからです。`, `C. これらの操作はKMSキーの基本的な操作であり、キーユーザーにはこれらの操作権限が必要だからです。`, `D. これらの操作は最も頻繁に使用される一方で、セキュリティ上特にリスクのある操作だからです。`],
		multipleAnswers: false,
		correctAnswers: [`B. これらの操作が外部アカウントからのKMSキーの使用を制御するために必要だからです。`],
		explanation: `これらのアクションは、外部アカウントがKMSキーを適切に使用するために必要であり、それは暗号化、復号化、再暗号化、データキー生成、キーの情報表示です。これらの権限を許可することで、外部アカウントはKMSキーを正しく操作することができます。`
	}]
}, {
	id: 8,
	question: `あなたは金融業界の企業に所属するプラットフォームチームの一員で、AWSリソースをより効果的かつスタンダードな方法で管理するために、AWS Service Catalogを活用しています。このシステムは、異なるチーム間で用いる承認済みのAWSリソースを保持しています。Linuxを含むEC2インスタンスを有するService Catalog製品を設定したところ、CloudFormationテンプレートはユーザーに5タイプのインスタンスから選択することを許可しています。ですが、開発チームがService Catalogポートフォリオから製品を立ち上げる際には、インスタンスタイプt2.microのみを使用するように限定したいと望んでいます。この要求を最も適切に満たすためには、どのような手段を用いるべきでしょうか？`,
	options: [`Service Catalogのポートフォリオを選択し、「InstanceType」をt2.microに制限するために、製品のテンプレート制約を追加します。`, `Service Catalogで新たなサービスアクションを作成し、「AWS-InstanceType」SSMドキュメントを選択し、「InstanceType」パラメータをt2.microに設定します。`, `Service Catalogで新たな製品を作り、新規のCloudFormationテンプレートをアップロードし、「InstanceType」をt2.microに設定します。その後、新規製品を開発チームのポートフォリオに追加します。`, `Service Catalog製品に制限を加える方法は存在しません。インスタンスタイプをt2.microに制約するためには、Service Catalog製品のCloudFormationテンプレートを修正が必要となります。`],
	multipleAnswers: false,
	correctAnswers: [`Service Catalogのポートフォリオを選択し、「InstanceType」をt2.microに制限するために、製品のテンプレート制約を追加します。`],
	explanation: `選択肢Aが正解です。「Template Constraint」を利用することで、製品に対する諸制約をポートフォリオ内で追加するには、これが最も適切な方法であり、開発チームが他のインスタンスタイプを用いることを禁止できます。「Template Constraint」の一例としては、以下のようなものがあります：{"Rules": { "Rule1": { "Assertions": [ { "Assert" : {"Fn::Contains": [["t2.micro"], {"Ref": "InstanceType"}]}, "AssertDescription": "Instance type should be t2.micro"} ]} }}新たな製品の立ち上げ時に、インスタンスタイプは「t2.micro」限定となります。選択肢Bは誤りです。Service Catalogの「service action」が動作する方法とは異なります。「service action」は、AWS Systems Manager documentsを活用してEC2インスタンスに対するアクションを定めます。CloudFormation パラメーターに制約を加えるために「service actions」を用いることはできません。選択肢Cも誤りです。「Template Constraint」を用いることで、開発チームが対象とする製品に制約を加えることが望ましいので、新しいCloudFormationテンプレートを利用して、Service Catalogに新規製品を作成する必要はありません。選択肢Dも誤りです。CloudFormationテンプレートを変更する必要はありません。同一テンプレートが複数のチームから利用されています。「Template Constraint」を活用することがこの制約を適用する最適な方法です。参考：https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-constraint.html`,
	subQuestions: [{
		id: 1,
		question: `AWSのServices Catalogは何を目的としたサービスですか？`,
		options: [`AWSリソースの集中管理と追跡`, `AWSリソースの統一的理解と知識の広範囲な共有`, `AWSリソースの一貫性ある配置と制御`, `AWSリソースのセキュリティとコンプライアンスの管理`],
		multipleAnswers: false,
		correctAnswers: [`AWSリソースの一貫性ある配置と制御`],
		explanation: `AWS Service Catalogは、AWSリソースを効果的に管理し、標準の方法で設定することを目的としたサービスです。これにより、企業は特定のチームやユーザーが使用できるAWSリソースを制限し、リソースの一貫性ある配置と制御を実現することができます。`
	}, {
		id: 2,
		question: `Service Catalogの「Template Constraint」は何をしますか？`,
		options: [`特定のリソースに対して制約を設定します`, `リソースの使用状況を規定します`, `リソースの使用料金を制御します`, `リソースの制限を設定します`],
		multipleAnswers: false,
		correctAnswers: [`特定のリソースに対して制約を設定します`],
		explanation: `Service Catalogの「Template Constraint」は、特定のAWSリソースに対して制約を設定するために使用されます。これにより、企業はそのリソースがどのように使用され、どの属性が設定でき、どの値が設定できるかを制御することができます。`
	}, {
		id: 3,
		question: `Service Catalogの「Service Action」は何をしますか？`,
		options: [`特定のリソースに対する操作を定義します`, `リソースの使用状況を規定します`, `リソースの使用料金を制御します`, `リソースの制限を設定します`],
		multipleAnswers: false,
		correctAnswers: [`特定のリソースに対する操作を定義します`],
		explanation: `Service Catalogの「Service Action」は、特定のAWSリソースに対する操作を定義するために使用されます。これにより、リソースの省エネ管理、データバックアップ、リソースのスケーリングなど、特定のリソースに対する特定のアクションを定義して実行することができます。`
	}, {
		id: 4,
		question: `CloudFormationテンプレートとは何ですか？`,
		options: [`AWSリソースの一覧を表示するためのテンプレート`, `AWSリソースのコード化された表現`, `AWSリソースのグラフィカルな表現`, `AWSリソースの配置を手動で行うためのガイド`],
		multipleAnswers: false,
		correctAnswers: [`AWSリソースのコード化された表現`],
		explanation: `AWSのCloudFormationテンプレートは、AWSリソースのスタック（集合）を作成、更新、削除するためのコード化（プログラム）された表現です。これはJSONやYAMLといった形式で記述されます。`
	}, {
		id: 5,
		question: `AWS Service Catalogのポートフォリオとは何ですか？`,
		options: [`特定のAWSリソースのコレクション`, `一連のAWSサービス`, `AWSリソースの管理ツール`, `AWSリソースの使用履歴の記録`],
		multipleAnswers: false,
		correctAnswers: [`特定のAWSリソースのコレクション`],
		explanation: `AWS Service Catalogのポートフォリオは、特定のAWSリソースのコレクションを指します。これにより、企業はそのリソースがどのように使用され、どの属性が設定できるかを制御することができます。また、ポートフォリオを使用して、特定のAWSリソースを特定のユーザーやチームに割り当てることもできます。`
	}]
}, {
	id: 7,
	question: `あなたのチームはAmazon API GatewayとLambda関数を用いたマイクロサービス構築を行っています。試験の段階で、エンドユーザーが 'https://xxxxxxxxxx.execute-api.ap-southeast-1.amazonaws.com/test/invalid' という無効なエンドポイントにアクセスした際に、HTTPレスポンスとしてステータスコード403及び「{ "message": "Missing Authentication Token" }」メッセージを取得することがわかりました。このレスポンスのステータスコードを '403 Forbidden' から '404 Not Found' に変更するには、どのような方法が最善でしょうか?`,
	options: [`まず、AWSコンソールに行き、API Gatewayを選び、APIを選択します。その後、APIのGateway Responsesパネルから「403 Forbidden」レスポンスを選択し、'404 Not Found'に変更します。そうしたら、ブラウザのキャッシュをクリアして再度テストを行います。`, `AWSのコンソールに行き、API GatewayからAPIを選択します。次に、APIのGateway Responsesセクションで「Missing Authentication Token」を選択し、デフォルトのステータスコード（403）を404に変えます。その後、APIを新しいステージあるいは既存のステージにデプロイします。`, `AWSコンソールに行き、API Gatewayを選択してAPIを選びます。APIのResourcesセクションで無効なエンドポイントに対するメソッドを作ります。その後、「Method Response」でHTTPレスポンスを '404 Not Found'にカスタマイズします。最後に、APIを新しいステージに再デプロイします。`, `AWSコンソールに行き、API Gatewayを選択してAPIを選びます。APIのResourcesパーツで、全ての無効なエンドポイントに対するメソッドを建てます。「Integration Response」の中で'Method response status'を '404 Not Found'に変更します。`],
	multipleAnswers: false,
	correctAnswers: [`AWSのコンソールに行き、API GatewayからAPIを選択します。次に、APIのGateway Responsesセクションで「Missing Authentication Token」を選択し、デフォルトのステータスコード（403）を404に変えます。その後、APIを新しいステージあるいは既存のステージにデプロイします。`],
	explanation: `選択肢Aは不正解です。ユーザーはGateway Responsesパネルで「403 Forbidden」レスポンスを選択することはできません。代わりにグラウェイレスポンスのタイプ（つまり「Missing Authentication Token」）を選び、そのステータスコードとヘッダーをカスタマイズすることができます。 選択肢Bが正解です。これはGateway Responseのステータスコードを変更する正確な手法です。 選択肢CとDは不正解です。ユーザーは無効なエンドポイントのメソッドを設定する必要はありません。API Gatewayがリクエストの処理に失敗した場合、リクエストはバックエンドに転送されず、エラーレスポンスがクライアントに戻されます。適切な手順は、Gateway Responsesパネルでレスポンスをカスタマイズすることです。 参考： https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-gatewayResponse-definition.html`,
	subQuestions: [{
		id: 1,
		question: `Amazon API GatewayのGateway Responsesセクションではどのような設定が可能でしょうか?`,
		options: [`特定のHTTPレスポンスステータスコードをカスタマイズする`, `全てのエンドポイントに共通するメソッドを作成する`, `Lambda関数のバージョンを管理する`, `APIのスロットリングを設定する`],
		multipleAnswers: false,
		correctAnswers: [`特定のHTTPレスポンスステータスコードをカスタマイズする`],
		explanation: `Amazon API GatewayのGateway Responsesセクションでは、特定のHTTPレスポンスステータスコードについてカスタマイズ（ステータスコードやヘッダーの変更）が可能です。`
	}, {
		id: 2,
		question: `「Missing Authentication Token」エラーメッセージが表示された際、原因は何が考えられますか?`,
		options: [`エンドポイントのURLが正しくありません`, `Lambda関数にバグが存在します`, `一時的にAPI Gatewayが利用できない状態です`, `REST APIがプライベート設定になっています`],
		multipleAnswers: false,
		correctAnswers: [`エンドポイントのURLが正しくありません`],
		explanation: `'Missing Authentication Token'というメッセージは、指定したURLに対応するエンドポイントまたはリソースがAPI Gatewayに存在しない場合に表示されます。これは典型的に無効なエンドポイントへのアクセスを示します。`
	}, {
		id: 3,
		question: `マイクロサービスのテスト段階でエラーが発生した場合、次に行うべき手順は何ですか?`,
		options: [`すぐにプロダクション環境にデプロイする`, `該当するエラーレスポンスを確認し、必要であればそれをカスタマイズする`, `全てのエラーメッセージを無視し、リリースする`, `新規にAPI Gatewayを作成する`],
		multipleAnswers: false,
		correctAnswers: [`該当するエラーレスポンスを確認し、必要であればそれをカスタマイズする`],
		explanation: `マイクロサービスのテスト段階でエラーが発生した場合、次に行うべき手順は該当するエラーレスポンスを確認し、必要であればそれをカスタマイズすることです。これにより、エラーレスポンスがエンドユーザーに適切な情報を提供できるようになります。`
	}, {
		id: 4,
		question: `API Gatewayで作成したAPIの変更を反映するには、何を行う必要がありますか?`,
		options: [`API Gatewayコンソールのリフレッシュボタンを押す`, `新しいステージを作成してデプロイする`, `APIを削除してから再作成する`, `Amazon CloudFormationスタックをアップデートする`],
		multipleAnswers: false,
		correctAnswers: [`新しいステージを作成してデプロイする`],
		explanation: `API Gatewayで作成したAPIの変更を反映するには、新しいステージを作成してデプロイする必要があります。また、既存のステージへのデプロイも可能です。これにより、エンドユーザーが使用するAPIエンドポイントに対する変更が反映されます。`
	}, {
		id: 5,
		question: `Amazon API Gatewayでエラーレスポンスのステータスコードをカスタマイズした後、ブラウザのキャッシュをクリアすべきですか?`,
		options: [`はい、必ずクリアする必要があります`, `いいえ、クリアする必要はありません`, `Depends on the browser being used`, `Not applicable`],
		multipleAnswers: false,
		correctAnswers: [`いいえ、クリアする必要はありません`],
		explanation: `Amazon API Gatewayでエラーレスポンスのステータスコードをカスタマイズした後、特にブラウザのキャッシュをクリアする必要はありません。API Gatewayのレスポンスはキャッシュされず、各リクエストで実際のレスポンスが送信されます。`
	}]
}, {
	id: 9,
	question: `あなたの企業は現在、VMware vCenterを使ってオンプレミスの仮想マシンを運用しており、それらをAWSに移行するためにAWS Migration Hubを利用する計画を立てています。移行に先立って、AWSのApplication Discovery ServiceのAgentless Discoveryを用いてオンプレミス環境の詳細を収集するという考えがあるものの、Agentless Discoveryを適切に利用するためにはどのような前提条件が必要となるでしょうか？正解は2つ選んでください。`,
	options: [`Agentless Discoveryを適用したい仮想マシンにログインして、エージェントインストール用のスクリプトをダウンロードする（例：curl -o ./aws-discovery-agent.tar.gz https://s3-us-west-2.amazonaws.com/aws-discovery-agent.us-west-2/linux/latest/aws-discovery-agent.tar.gz）。`, `オンプレミスのファイアウォールの設定を更新し、Agentless DiscoveryがAWSドメインと通信するためのアウトバウンド接続を許可する（例：arsenal-discovery.us-west-2.amazonaws.com）。`, `Agentless DiscoveryがデータをAWSに転送する際の認証のために、IAMユーザーを作成し、そのユーザーにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentlessCollectorAccess」をアタッチする。`, `IAMロールを作成し、それにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentAccess」をアタッチし、そのロールをAgentless Discoveryに割り当てる。`, `Application Discovery Serviceのセキュリティグループ設定を確認して、オンプレミスネットワークのIP範囲に対してポート443での接続を許可することを確認する。`],
	multipleAnswers: true,
	correctAnswers: [`オンプレミスのファイアウォールの設定を更新し、Agentless DiscoveryがAWSドメインと通信するためのアウトバウンド接続を許可する（例：arsenal-discovery.us-west-2.amazonaws.com）。`, `Agentless DiscoveryがデータをAWSに転送する際の認証のために、IAMユーザーを作成し、そのユーザーにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentlessCollectorAccess」をアタッチする。`],
	explanation: `選択肢Aは間違っています。本ケースではAgentless Discoveryを使用しているため、エージェントのインストールは必要ありません。 選択肢Bは正解です。Agentless DiscoveryがAWSドメインとHTTPS接続を確立できるよう、オンプレミスのファイアウォールを更新してAWSドメインへのアウトバウンド接続を許可する必要があります。 選択肢Cは正解です。Agentless DiscoveryはアプリケーションのデータをAWSに送信するためにIAMユーザーの認証情報を必要とします。 選択肢Dは間違っています。IAMロールはAgentless Discoveryには必要なく、またDiscovery Agentではないため「AWSApplicationDiscoveryAgentAccess」は必要ありません。 選択肢Eも間違っています。Application Discovery Serviceのセキュリティグループ設定は変更できません。`,
	subQuestions: [{
		id: 1,
		question: `AWSのApplication Discovery ServiceのAgentless Discoveryを用いるために必要な事項は何でしょうか？正解は1つ選んでください。`,
		options: [`Agentless Discoveryを適用したい仮想マシンにログインして、エージェントインストール用のスクリプトをダウンロードする`, `オンプレミスのファイアウォールの設定を更新し、Agentless DiscoveryがAWSドメインと通信するためのアウトバウンド接続を許可する`, `Application Discovery Serviceのセキュリティグループ設定を確認する`, `IAMロールを作成し、それにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentAccess」をアタッチする`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスのファイアウォールの設定を更新し、Agentless DiscoveryがAWSドメインと通信するためのアウトバウンド接続を許可する`],
		explanation: `Agentless DiscoveryがAWSドメインとHTTPS接続を確立できるよう、オンプレミスのファイアウォールを更新してAWSドメインへのアウトバウンド接続を許可する必要があります。`
	}, {
		id: 2,
		question: `Agentless DiscoveryがデータをAWSに転送する際に必要な事項は何でしょうか？正解は1つ選んでください。`,
		options: [`IAMロールを作成し、それにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentAccess」をアタッチする`, `Agentless Discoveryを適用したい仮想マシンにログインして、エージェントインストール用のスクリプトをダウンロードする`, `IAMユーザーを作成し、そのユーザーにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentlessCollectorAccess」をアタッチする`, `Application Discovery Serviceのセキュリティグループ設定を確認する`],
		multipleAnswers: false,
		correctAnswers: [`IAMユーザーを作成し、そのユーザーにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentlessCollectorAccess」をアタッチする`],
		explanation: `Agentless DiscoveryはアプリケーションのデータをAWSに送信するためにIAMユーザーの認証情報を必要とします。`
	}, {
		id: 3,
		question: `Agentless Discoveryを使用する際に不必要な事項は何でしょうか？正解は2つ選んでください。`,
		options: [`Agentless Discoveryを適用したい仮想マシンにログインして、エージェントインストール用のスクリプトをダウンロードする`, `Application Discovery Serviceのセキュリティグループ設定を確認する`, `IAMロールを作成し、それにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentAccess」をアタッチする`, `オンプレミスのファイアウォールの設定を更新し、Agentless DiscoveryがAWSドメインと通信するためのアウトバウンド接続を許可する`, `IAMユーザーを作成し、そのユーザーにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentlessCollectorAccess」をアタッチする`],
		multipleAnswers: true,
		correctAnswers: [`Agentless Discoveryを適用したい仮想マシンにログインして、エージェントインストール用のスクリプトをダウンロードする`, `IAMロールを作成し、それにプリセットされたIAMポリシー「AWSApplicationDiscoveryAgentAccess」をアタッチする`],
		explanation: `Agentless Discoveryの場合、エージェントのインストールは必要ありません。また、IAMロールはAgentless Discoveryには必要なく、またDiscovery Agentではないため「AWSApplicationDiscoveryAgentAccess」は必要ありません。`
	}, {
		id: 4,
		question: `Agentless DiscoveryがデータをAWSに転送するために必要なIAMポリシーは何でしょうか？正解は1つ選んでください。`,
		options: [`AWSApplicationDiscoveryAgentAccess`, `AWSApplicationDiscoveryAgentlessCollectorAccess`, `AWSApplicationDiscoveryAccess`, `None of the above`],
		multipleAnswers: false,
		correctAnswers: [`AWSApplicationDiscoveryAgentlessCollectorAccess`],
		explanation: `Agentless DiscoveryはアプリケーションのデータをAWSに送信するためにIAMユーザーの認証情報を必要とし、その認証情報には「AWSApplicationDiscoveryAgentlessCollectorAccess」ポリシーが必要です。`
	}, {
		id: 5,
		question: `Application Discovery Serviceのセキュリティグループ設定は何を許可するべきでしょうか？正解は1つ選んでください。`,
		options: [`オンプレミスネットワークのIP範囲に対してポート443での接続`, `AWSドメインへのアウトバウンド接続`, `エージェントへのインバウンド接続`, `セキュリティグループ設定は変更できません`],
		multipleAnswers: false,
		correctAnswers: [`セキュリティグループ設定は変更できません`],
		explanation: `Application Discovery Serviceのセキュリティグループ設定は変更できません。`
	}]
}, {
	id: 10,
	question: `あなたは、大手製薬会社のAWSコンサルタントとして働いています。同社のITインフラストラクチャは、オンプレミス環境とAWSの両方を使用しています。業務にとって重要なあるアプリケーションにはAWS RDSのMySQLデータベースが導入されています。役員から、もしもAWSの全体がダウンした場合の対策として、オンプレミスのインスタンスにRDS MySQLデータベースをレプリケーションするという指示がありました。最適な方法を探す必要があります。以下の選択肢のうち、どのオプションが最も良い解決策となりますか？`,
	options: [`RDSコンソール上から、ターゲットをオンプレミスインスタンスとするリードレプリカを作成します。その後、RDS MySQLデータベースのセキュリティグループを設定し、オンプレミスインスタンスへのアウトバウンドトラフィックを許可します。`, `Linuxサーバーを通じてRDSデータベースに接続し、「mysqldump」ユーティリティを使用してRDSデータベースをSQLファイルとして出力します。このファイルをオンプレミスインスタンスにインポートします。そして、AWS RDSコンソール上から、オンプレミスのインスタンスをレプリカとして指定します。`, `AWS RDSコンソールで対象データベースを選択し、リードレプリカを作成します。レプリカに接続し、mysqlの「show slave status」コマンドを通じてバイナリログの情報を取得します。以前に取得したバイナリログ情報を用いてmysqlの「change master」コマンドにより、レプリケーションターゲットをリードレプリカからオンプレミスサーバーへと変更します。`, `AWS Database Migration Serviceを用いてレプリケーションサーバーを立ち上げます。ソースとしてRDS MySQLデータベースを、ターゲットとしてオンプレミスのインスタンスを指定します。その上で、レプリケーションを開始するための移行タスクを生成します。`],
	multipleAnswers: false,
	correctAnswers: [`AWS RDSコンソールで対象データベースを選択し、リードレプリカを作成します。レプリカに接続し、mysqlの「show slave status」コマンドを通じてバイナリログの情報を取得します。以前に取得したバイナリログ情報を用いてmysqlの「change master」コマンドにより、レプリケーションターゲットをリードレプリカからオンプレミスサーバーへと変更します。`],
	explanation: `選択肢Aは間違いです。AWS RDSでは、リードレプリカもAWS RDSのインスタンスであり、ユーザーはRDSコンソールを通じて直接オンプレミスのインスタンスをレプリカとして追加することはできません。 選択肢Bも間違いです。このオプションではデータベースをオンプレミスのインスタンスに出力するだけで、RDSインスタンスのレプリケーションターゲットとしてオンプレミスのインスタンスを追加する手順が含まれていません。 選択肢Cが正解です。このオプションでは、まずリードレプリカを作成し、リードレプリカを用いてデータベースを出力し、バイナリログ情報を取得します。その後、MySQLのバイナリログ情報を使用し、ユーザーはRDSインスタンスからオンプレミスサーバーへのレプリケーションを設定できます。 選択肢Dは間違いです。AWS Database Migration Service（DMS）は、オンプレミスからAWSへのデータベース移行に適しています。例えば、AWS DMSはオンプレミスのMySQLデータベースをAWS RDS MySQLへの一回限りの移行を実行できます。ただし、オンプレミスのスタンバイインスタンスを設定するための適切なサービスではありません。`,
	subQuestions: [{
		id: 1,
		question: `AWS RDSのリードレプリカは何に使用されますか？`,
		options: [`オンプレミスインスタンスのレプリカを作成するため`, `読み取り専用のトラフィックを基本的なDBインスタンスから分断し、読み取り専用のワークロードのパフォーマンスを向上させるため`, `データベースのバックアップを作成するため`, `AWSからオンプレミスのインスタンスに移行するため`],
		multipleAnswers: false,
		correctAnswers: [`読み取り専用のトラフィックを基本的なDBインスタンスから分断し、読み取り専用のワークロードのパフォーマンスを向上させるため`],
		explanation: `AWS RDSのリードレプリカは、読み取りトラフィックを基本的なDBインスタンスから分断し、読み取り専用のワークロードのパフォーマンスを向上させるために使用されます。`
	}, {
		id: 2,
		question: `オンプレミスインスタンスをAWS RDSのレプリカとして追加できますか？`,
		options: [`はい、AWS RDSコンソールを通じて直接追加できます`, `いいえ、RDSからオンプレミスインスタンスへの直接的なレプリケーションはサポートされていません`, `はい、Amazon CLIを使用して追加できます`, `はい、AWS SDKを使用して追加できます`],
		multipleAnswers: false,
		correctAnswers: [`いいえ、RDSからオンプレミスインスタンスへの直接的なレプリケーションはサポートされていません`],
		explanation: `AWS RDSからオンプレミスインスタンスへの直接的なレプリケーションはAWS RDSではサポートされていません。`
	}, {
		id: 3,
		question: `「mysqldump」ユーティリティは何に使用されますか？`,
		options: [`MySQLデータベースのレプリケーションを設定するため`, `MySQLデータベースの全てのテーブルをSQL形式で出力するため`, `MySQLデータベースのログを取得するため`, `MySQLデータベースの管理者権限を取得するため`],
		multipleAnswers: false,
		correctAnswers: [`MySQLデータベースの全てのテーブルをSQL形式で出力するため`],
		explanation: `'mysqldump'ユーティリティは、MySQLデータベースの全てのテーブルをSQL形式で出力するために使用されます。`
	}, {
		id: 4,
		question: `AWS Database Migration Service（DMS）はどのような目的で使用されますか？`,
		options: [`RDSからオンプレミスインスタンスへのレプリケーションを作成するため`, `RDSインスタンスのバックアップとレストアの仕組みを提供するため`, `オンプレミスからAWSへ一回限りの移行を行うため`, `リードレプリカを作成するため`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスからAWSへ一回限りの移行を行うため`],
		explanation: `AWS Database Migration Service（DMS）は、様々なデータベース間でのデータベース移行を可能にし、オンプレミスからAWSへ一回限りの移行を実行するために使用されます。ただし、オンプレミスのスタンバイインスタンスを設定するための適切なサービスではありません。`
	}, {
		id: 5,
		question: `バイナリログは、MySQLのどの機能で使用されますか？`,
		options: [`データベースレプリケーション`, `データベースバックアップとリカバリ`, `データベースのセキュリティ監視`, `データベースのパフォーマンスモニタリング`],
		multipleAnswers: true,
		correctAnswers: [`データベースレプリケーション`, `データベースバックアップとリカバリ`],
		explanation: `MySQLのバイナリログは、複数の目的で使用されますが、主にデータベースレプリケーションとデータベースバックアップ及びリカバリに使用されます。これにより、マスターサーバーに発生したすべての変更をスレーブサーバーにコピーし、データをバックアップし、以前の状態に戻すことが可能になります。`
	}]
}, {
	id: 11,
	question: `月間ユーザー数が1億を超えている世界的な規模の旅行予約サービスを提供している企業が、Amazon EC2上でウェブアプリケーションを展開しており、Elastic Load Balancer (ELB)を使用しています。EC2インスタンスはAuto Scaling Groupsと組み合わさっており、大量のトラフィックに対応できるように設定されています。アプリケーションの健全性への変動にすぐに対応でき、パフォーマンスを維持し、ユーザーの位置に基づいてユーザートラフィックを最適なエンドポイントへルーティングするための、クロスリージョントラフィック管理ソリューションが必要です。あなたがソリューションアーキテクトとしてこの問題を解決するために雇われたとし、最も適切な解決策とは何でしょうか?`,
	options: [`Amazon CloudFrontをELBの前に設置し、エッジロケーションキャッシュを活用して低遅延を実現し、ユーザーエクスペリエンスを向上させる。`, `AWS Global AcceleratorをELBの前に使用し、可用性とパフォーマンスを向上させ、ユーザーエクスペリエンスを改善する。`, `AWS Network LoadBalancerを使用して高トラフィックを処理し、より低い遅延を提供してユーザーエクスペリエンスを改善する。`, `アプリケーションを現在のプラットフォームからAWS Serverless (API Gateway, Lambda, DynamoDBなど)に移行し、動的な負荷を吸収でき、遅延問題を解決し、ユーザーエクスペリエンスを向上させる。`],
	multipleAnswers: false,
	correctAnswers: [`AWS Global AcceleratorをELBの前に使用し、可用性とパフォーマンスを向上させ、ユーザーエクスペリエンスを改善する。`],
	explanation: `選択肢AのAmazon CloudFrontはコンテンツデリバリーネットワークでありエッジロケーションにコンテンツをキャッシュしますが、最適な地域エンドポイントへのパスを確立する能力はありません。選択肢BのAWS Global Acceleratorは、エッジロケーションを利用して最適な地域エンドポイントへのパスを確立し、マルチリージョンのフェイルオーバーを効果的に行うことができるため正解です。選択肢CのAWS Network LoadBalancerはリージョン内のパフォーマンスを改善することが可能ですが、このシナリオではクロスリージョンのフェイルオーバーソリューションが求められており、選択肢Dではパフォーマンスとレイテンシをネットワークレベルで最適化する能力が求められています。`,
	subQuestions: [{
		id: 1,
		question: `Amazon EC2とは何ですか?`,
		options: [`AmazonのElectric Cloud Computingの略で、電気消費を最小限に抑えたクラウドコンピューティングサービスを指す。`, `Amazon Elastic Compute Cloudの略で、スケーラブルなコンピューティング能力を提供するウェブサービスのことを指す。`, `エッジロケーションキャッシュを活用したAmazonのクラウドコンピューティングサービス。`, `AmazonのEcology Conscious Computingの略で、環境に配慮したクラウドコンピューティングサービスを指す。`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Elastic Compute Cloudの略で、スケーラブルなコンピューティング能力を提供するウェブサービスのことを指す。`],
		explanation: `Amazon EC2 (Amazon Elastic Compute Cloud)は、Amazon Web Services (AWS) が提供する、スケーラブルなコンピューティング能力を提供するウェブサービスです。`
	}, {
		id: 2,
		question: `Elastic Load Balancer (ELB)の主な役割は何でしょうか?`,
		options: [`AWS上のリソース使用を最適化し、コストパフォーマンスを上げる役割。`, `クラウドベースの分散エンタープライズシステムを維持する役割。`, `AWSで動作するアプリケーションのトラフィックを複数のリソースに自動的に分散する役割。`, `AWSインフラストラクチャのセキュリティを強化する役割。`],
		multipleAnswers: false,
		correctAnswers: [`AWSで動作するアプリケーションのトラフィックを複数のリソースに自動的に分散する役割。`],
		explanation: `Elastic Load Balancer (ELB)は、AWSで動作するアプリケーションのトラフィックを、複数のEC2インスタンス、コンテナ、IPアドレス、Lambda functionsなど、複数のターゲットに自動的に分散する役割があります。これにより、アプリケーションの可用性と耐障害性を高めることが可能となります。`
	}, {
		id: 3,
		question: `Auto Scaling Groupsの主な用途は何でしょうか?`,
		options: [`フェイルオーバーメカニズムの自動化。`, `アプリケーション特性を記述するためのスクリプトテンプレートの管理。`, `稼働中のEC2インスタンスの数を自動的にスケーリングすること。`, `AWSの各リージョン間でトラフィックをバランスすること。`],
		multipleAnswers: false,
		correctAnswers: [`稼働中のEC2インスタンスの数を自動的にスケーリングすること。`],
		explanation: `Auto Scaling Groupsは、稼働中のEC2インスタンスの数を自動的に増減することで、トラフィックを効果的に分散し、必要に応じてリソースのスケーリングを行う機能を提供しています。`
	}, {
		id: 4,
		question: `AWS Global Acceleratorを使用する主な目的は何でしょうか?`,
		options: [`AWSのリージョン間でトラフィックを自動的に転送すること。`, `AWSのリソース使用を監査し、最適化すること。`, `AWSのインフラストラクチャのセキュリティを保つこと。`, `AWSにホストされているアプリケーションのパフォーマンスと可用性を向上させること。`],
		multipleAnswers: false,
		correctAnswers: [`AWSにホストされているアプリケーションのパフォーマンスと可用性を向上させること。`],
		explanation: `AWS Global Acceleratorは、ユーザーの接続を評価し、AWSネットワークを最適に活用することで、アプリケーションのパフォーマンスと可用性を向上させるサービスです。これにより、アプリケーションは低遅延で高可用性の経路を利用できるようになります。`
	}, {
		id: 5,
		question: `Amazon CloudFrontとは何ですか?`,
		options: [`AWSが提供する、スケーラブルなコンピューティング能力を提供するウェブサービス。`, `AWSで動作するアプリケーションのトラフィックを、複数のリソースに自動的に分散するサービス。`, `稼働中のEC2インスタンスの数を自動的にスケーリングするサービス。`, `AWSが提供する世界中のエッジロケーション（データセンター）にデータをキャッシュするよう設計されたコンテンツ配信ネットワーク (CDN) サービス。`],
		multipleAnswers: false,
		correctAnswers: [`AWSが提供する世界中のエッジロケーション（データセンター）にデータをキャッシュするよう設計されたコンテンツ配信ネットワーク (CDN) サービス。`],
		explanation: `Amazon CloudFrontは、AWSが提供する世界中のエッジロケーション（データセンター）にデータをキャッシュするよう設計されたコンテンツ配信ネットワーク (CDN) サービスです。これによりユーザーに対するレスポンス時間を短縮し、高速なデータ転送が可能となります。`
	}]
}, {
	id: 12,
	question: `あなたは国際的なメディア会社のソリューションアーキテクトとして働いています。同社は　いままで約300台のオンプレミスサーバを使用し、多数の国々からの大量のデータを保管・処理してきました。しかしこのプロセスは、災害復旧（DR）が必要になると、物理的なテープを別のデータセンターに複製し、スタッフが二次データセンターへ物理的に移動して正しいテープを探すという大変な作業が必要です。従来のDRプロセスは手動でリソース消費が多く、今後のビジネス拡大に適していません。データ損失を最低限に抑え、DRプロセスを改善・自動化するよう社内から要望がありました。以下のオプションの中で、どれが最も効率的で適切なソリューションですか？`,
	options: [`A. オリジナルのサーバにAWS Elastic Disaster Recoveryを設定し、安全なデータ複製プロセスを開始します。あなたのデータはAWSアカウント内のステージングエリア・サブネットに複製され、選択したAWSリージョンに配置されます。`, `B. AWS Server Migration Serviceを導入し、オンプレミスのサーバをAWS上に複製します。これにより、DR時にもAWSを稼働させることが可能で、中断時間を極力抑え、定常的にオンプレミスとAWSがアクティブ/パッシブモードで連携します。`, `C. AWS DataSyncを設定し、オンプレミスのデータとAWSのストレージサービス間での自動データ移動を実現します。これにより、データをAWSクラウドにバックアップし、速やかなDR化を可能にします。`, `D. AWS Storage Gatewayを利用し、オンプレミスのデータを複製します。この複製データはクラウドストレージに保存され、ハイブリッドクラウドストレージサービスを実現します。これにより、事実上無限のクラウドストレージへのアクセスを提供します。`],
	multipleAnswers: false,
	correctAnswers: [`A. オリジナルのサーバにAWS Elastic Disaster Recoveryを設定し、安全なデータ複製プロセスを開始します。あなたのデータはAWSアカウント内のステージングエリア・サブネットに複製され、選択したAWSリージョンに配置されます。`],
	explanation: `正解は選択肢Aです。AWS Elastic Disaster RecoveryはあなたのサーバをAWS上でデータの複製を継続することで、災害時のデータ復旧を効率的に行うことができます。また、これにより計算とストレージの効率性を改善し、必要なリソースを削減することができます。 選択肢Bは不正解です。AWS Server Migration Service（SMS）はリフトアンドシフト移行に使用され、このケースで求められているのはクラウド上にDRシナリオを提供することです。 選択肢Cは不正解です。AWS DataSyncはオンラインデータ転送サービスであり、このケースには適していないと考えられます。同サービスは主にデータの大量移動を簡素化し、自動化し、高速化するために使用されるもので、DR対策には適していません。 選択肢Dは不正解です。AWS Storage Gatewayはクラウドストレージに本質的に無制限のオンプレミスアクセスを提供するハイブリッドクラウドストレージサービスですが、DRサービスとしては適していません。`,
	subQuestions: [{
		id: 1,
		question: `AWS Elastic Disaster Recovery を使用する主な目的は何ですか？`,
		options: [`A. サーバをAWSクラウドにシフトする`, `B. オンプレミスのデータを自動的にバックアップ`, `C. サーバの複製と災害時のデータ復旧の効率化`, `D. クラウドに無制限のストレージ空間を提供`],
		multipleAnswers: false,
		correctAnswers: [`C. サーバの複製と災害時のデータ復旧の効率化`],
		explanation: `AWS Elastic Disaster RecoveryはあなたのサーバをAWS上でデータの複製を継続することで、災害時のデータ復旧を効率的に行うことができます。また、これにより計算とストレージの効率性を改善し、必要なリソースを削減することができます。`
	}, {
		id: 2,
		question: `AWS Server Migration Service（SMS）の主な用途は何ですか？`,
		options: [`A. データのバックアップ`, `B. データの複製と災害対策`, `C. データのリフトアンドシフト移行`, `D. オンデマンドのデータストレージの供給`],
		multipleAnswers: false,
		correctAnswers: [`C. データのリフトアンドシフト移行`],
		explanation: `AWS Server Migration Service（SMS）は主にリフトアンドシフト移行に使用されます。つまり、オンプレミスのシステムをそのままクラウドに転送することが目的となります。`
	}, {
		id: 3,
		question: `AWS DataSyncの主な目的は何ですか？`,
		options: [`A. 大量のデータ移動を簡素化、自動化、高速化`, `B. 災害復旧（DR）シナリオの提供`, `C. オンプレミスアクセスを提供するハイブリッドクラウドストレージサービス`, `D. リアルタイムのエッジコンピューティング`],
		multipleAnswers: false,
		correctAnswers: [`A. 大量のデータ移動を簡素化、自動化、高速化`],
		explanation: `AWS DataSyncは主にデータの大量移動を簡素化、自動化、高速化するために使用されます。そのため、DR対策としては不適切であると言えます。`
	}, {
		id: 4,
		question: `AWS Storage Gateway の主な目的は何ですか？`,
		options: [`A. オンプレミス環境とクラウド間のデータ移行を容易にする`, `B. クラウドストレージに本質的に無制限のオンプレミスアクセスを提供するハイブリッドクラウドストレージサービス`, `C. データのバックアップと災害対策を提供する`, `D. データのリフトアンドシフト移行`],
		multipleAnswers: false,
		correctAnswers: [`B. クラウドストレージに本質的に無制限のオンプレミスアクセスを提供するハイブリッドクラウドストレージサービス`],
		explanation: `AWS Storage Gateway はクラウドストレージに本質的に無制限のオンプレミスアクセスを提供するハイブリッドクラウドストレージサービスですが、DRサービスとしては適していません。`
	}, {
		id: 5,
		question: `AWS Elastic Disaster Recoveryがデータを複製する場所はどこですか？`,
		options: [`A. AWSアカウント内のステージングエリア・サブネット`, `B. 客先のオンプレミスサーバ`, `C. AWS DataSyncのストレージサービス`, `D. AWS Storage Gatewayのストレージサービス`],
		multipleAnswers: false,
		correctAnswers: [`A. AWSアカウント内のステージングエリア・サブネット`],
		explanation: `AWS Elastic Disaster RecoveryはデータをAWSアカウント内のステージングエリア・サブネットに複製し、選択したAWSリージョンに配置します。これにより、災害時のデータ復旧を効率的に行うことができます。`
	}]
}, {
	id: 13,
	question: `ある研究所が自組織のオンプレミスでのデータバックアップソリューションを構築しようとしています。そのハイブリッドクラウドストレージソリューションには以下の要件が含まれています。 オンプレミス環境とAWS間でシームレスな接続 迅速にデプロイできる容易さ 堅牢でコスト効率的なクラウドストレージにバックアップされるオンプレミスのファイル共有を利用して、バックアップをクラウドへ移行する オンプレミスのアプリケーションからAWS内データへの低レイテンシーアクセス エンドツーエンドのデータ保護 これらすべてを満たす経済的なアーキテクチャとして、以下のうち最も適切なものは何ですか？`,
	options: [`Direct Connect接続を用いてオンプレミスとAWSの間の接続を確立し、オンプレミスとAWS間での安全で高速なデータ転送のための専用回線を設置します。すべてのオンプレミスのアプリケーションは、この同じDirect Connect接続を用いてAWS内のデータに接続できます。`, `AWS Storage Gatewayを利用して、ほぼ無制限のクラウドストレージを提供するハイブリッドクラウドストレージサービスを実現します。これが正解です。`, `AWS DataSyncを使用して、ストレージシステムとサービス間のデータ移行を単純化、自動化、加速するオンラインデータ転送サービスを実現します。`, `AWS Snowballをローカルのデータセンターに配置し、すべてのデータをコピーします。その後、AmazonがデータをAWS Cloudに複製するよう手配します。`],
	multipleAnswers: false,
	correctAnswers: [`AWS Storage Gatewayを利用して、ほぼ無制限のクラウドストレージを提供するハイブリッドクラウドストレージサービスを実現します。これが正解です。`],
	explanation: `選択肢Aは誤りです。Direct Connectはすぐに簡単にデプロイすることができないし、データ転送は暗号化されないため、エンドツーエンドのデータ保護という最後の要件を満たすことはできません。 選択肢Bが正しいです。AWS Storage Gatewayは上記のすべての要件を満たします。これらのユースケースをサポートするために、サービスはリモートテープ、S3ファイルゲートウェイ、FSxファイルゲートウェイ、ボリュームゲートウェイを提供し、オンプレミスのアプリケーションがクラウドストレージにシームレスに接続できるようにします。 選択肢Cは誤りです。AWS DataSyncは、インターネットやAWS Direct Connectを介して大量のデータをAWSストレージサービスと転送する過程を単純化、自動化、加速するオンラインデータ転送サービスです。オンプレミスのデータ、ネットワーク付きストレージ（NAS）システム、またはネットワークファイルシステム（NFS）からAmazon S3またはAmazon EFSへの移行を主に対象としています。しかし、AWS DataSyncはオンラインデータ転送に最適です。 選択肢Dは誤りです。AWS Snowballは主にAWSへのデータのインポート/エクスポートに使用されます。上記の要件に基づくハイブリッドクラウドストレージの構築は行われません。`,
	subQuestions: [{
		id: 1,
		question: `「AWS Storage Gateway」の機能について正しい選択肢はどれですか？`,
		options: [`復元や迅速なアクセスのために最近アクセスされたデータのコピーを保存します。`, `オンプレミスのアプリケーションのためにほぼ無制限のクラウドストレージを利用します。`, `両方とも正しい。`, `どちらも間違っている。`],
		multipleAnswers: false,
		correctAnswers: [`両方とも正しい。`],
		explanation: `「AWS Storage Gateway」は、オンプレミスのアプリケーションがほぼ無制限のクラウドストレージにシームレスに接続できるようにします。また、最近アクセスされたデータの一部をローカルにキャッシュして、復元や迅速なアクセスのためのデータを保存します。`
	}, {
		id: 2,
		question: `「AWS Direct Connect」の特徴について正しい選択肢はどれですか？`,
		options: [`オンプレミスとAWS間でデータ転送を暗号化します。`, `AWSへのデータアクセスに低レイテンシーを提供します。`, `両方とも正しい。`, `どちらも間違っている。`],
		multipleAnswers: false,
		correctAnswers: [`AWSへのデータアクセスに低レイテンシーを提供します。`],
		explanation: `「AWS Direct Connect」は、オンプレミスとAWS間の専用回線を設置し、高容量で低レイテンシーなデータ転送を提供します。しかし、データ転送は暗号化されないため、エンドツーエンドの安全なデータ転送を実現するには追加のセキュリティ対策が必要です。`
	}, {
		id: 3,
		question: `「AWS DataSync」の主な用途は何ですか？`,
		options: [`AWSへのデータのインポート/エクスポート`, `オンラインデータ転送サービス`, `両方とも正しい。`, `どちらも間違っている。`],
		multipleAnswers: false,
		correctAnswers: [`オンラインデータ転送サービス`],
		explanation: `「AWS DataSync」は、インターネットやAWS Direct Connectを介して大量のデータをAWSストレージサービスと転送する過程を単純化、自動化、加速するオンラインデータ転送サービスです。`
	}, {
		id: 4,
		question: `「AWS Snowball」は主にどのような場面で使用されますか？`,
		options: [`ハイブリッドクラウドストレージの構築`, `AWSへのデータのインポート/エクスポート`, `両方とも正しい。`, `どちらも間違っている。`],
		multipleAnswers: false,
		correctAnswers: [`AWSへのデータのインポート/エクスポート`],
		explanation: `「AWS Snowball」は主に大量のデータをAWSへインポート/エクスポートする際に使用されます。ハイブリッドクラウドストレージの構築には使用されません。`
	}, {
		id: 5,
		question: `エンドツーエンドのデータ保護を提供するAWSのサービスはどれですか?`,
		options: [`AWS Storage Gateway`, `AWS Direct Connect`, `AWS DataSync`, `AWS Snowball`],
		multipleAnswers: false,
		correctAnswers: [`AWS Storage Gateway`],
		explanation: `AWS Storage Gatewayはエンドツーエンドのデータ保護を提供します。すべてのデータは伝送中にSSLで暗号化され、AWSに保存されると、オプションでAWS Key Management Service (AWS KMS)を使用してサーバーサイドで暗号化されます。`
	}]
}, {
	id: 14,
	question: `新興企業のソリューションアーキテクトとして、コストを抑えつつパフォーマンスを高めるために、Amazon EC2インスタンスタイプ、Amazon Elastic Block Store (EBS) ボリューム、Auto Scaling groups、AWS Lambda関数等、AWSの様々な計算リソースの使用状況とコストに基づいた効率的なワークロードパターンを特定し、これらのリソースが過剰に供給されていたり、供給が不足していたりするのを防ぎたいと考えています。AWSで全アカウントのコスト削減およびパフォーマンス改善の可能性、予想される月次節約額、過剰に供給されているリソースによる節約可能額、供給が不足しているリソースによるボトルネックのリスクを示すダッシュボードの表示を希望しています。以下のAWSのサービスのうち、目的に合ったものはどれでしょうか？`,
	options: [`AWSのリソースが過剰に供給または供給不足にならないように、その利用状況に基づいてAWS Compute Optimizerを利用し、全アカウントの予想節約金額とパフォーマンス向上の可能性を評価します。`, `トラッキングしたいAWSリソースをAWS Service Catalogに設定し、その使用状況に基づいてその推奨を利用して最適化します。`, `AWS Budgetsを使用してAWSのコストと使用量を追跡し、使用状況に基づくリソースの推奨を得て、その推奨を活用してサービスとリソースを最適化します。`, `これらのメトリックスを捉えるダッシュボードは存在しません。CloudWatchダッシュボードを手動で作成する必要があります。CloudWatchのメトリクスに基づいてサービスとリソースを最適化します。`],
	multipleAnswers: false,
	correctAnswers: [`AWSのリソースが過剰に供給または供給不足にならないように、その利用状況に基づいてAWS Compute Optimizerを利用し、全アカウントの予想節約金額とパフォーマンス向上の可能性を評価します。`],
	explanation: `オプションAが正解です。AWS Compute Optimizerは、ワークロードに最適なAWS計算リソースを特定します。AWS Compute Optimizerを使用すると、リソース利用効率のメトリクスと推奨を一元化して表示でき、AWSリソースがどれだけ効率的に使用されているかを判断することができます。これらの効率メトリクスは、Amazon EC2、AWS Lambda、およびAmazon EBSのリソース、そしてAWSアカウントレベルで利用可能です。オプションBは不適切です。なぜなら、AWS Service Catalogは、承認されたITサービス（アプリケーション、リソース、メタデータ）のカタログを作成し管理するためのものであり、中央のITサービスチームやガバナンス／コンプライアンスチームが使用します。しかし、これは上記の要望を満たすものではありません。オプションCは不適切です。なぜなら、AWS BudgetsはAWSのコストと使用量を追跡し、行動を起こすのに役立つものですが、これはコストや使用量に対して予算を設定し、それを追跡するものであり、AWSのリソースやサービスの過剰供給や供給不足に対する推奨や提案を提供するものではありません。オプションDも不適切です。なぜなら、ダッシュボードを新たに作成する必要はなく、AWS Compute Optimizerサービスにて既に利用可能なメトリクスだからです。`,
	subQuestions: [{
		id: 1,
		question: `AWS Compute OptimizerはどのようなAWS計算リソースを特定するのに使用されますか？`,
		options: [`Amazon EC2とAWS Lambda`, `Amazon EBSとAmazon S3`, `Amazon SNSとAWS CodeCommit`, `Amazon CloudFrontとAmazon DynamoDB`],
		multipleAnswers: false,
		correctAnswers: [`Amazon EC2とAWS Lambda`],
		explanation: `AWS Compute Optimizerは、ワークロードに最適なAWS計算リソースを特定します。これには、Amazon EC2インスタンスとAWS Lambdaが含まれます。`
	}, {
		id: 2,
		question: `AWS Budgetsを用いて設定される物は何ですか？`,
		options: [`AWSのコストと使用量に対する予算`, `AWSリソースの最適化推奨`, `AWSサービスの一覧`, `AWSで使用可能な全リソースのカタログ`],
		multipleAnswers: false,
		correctAnswers: [`AWSのコストと使用量に対する予算`],
		explanation: `AWS BudgetsはAWSのコストと使用量を追跡し、行動を起こすのに役立つサービスですが、これはコストや使用量に対して予算を設定し、それを追跡するものです。`
	}, {
		id: 3,
		question: `AWS Service Catalogはどのような目的で使用されますか？`,
		options: [`承認されたITサービスのカタログを作成し、管理する`, `過剰に供給されたAWSリソースを特定する`, `AWSのコストと使用量を追跡する`, `AWSのリソースを最適化する`],
		multipleAnswers: false,
		correctAnswers: [`承認されたITサービスのカタログを作成し、管理する`],
		explanation: `AWS Service Catalogは、承認されたITサービス（アプリケーション、リソース、メタデータ）のカタログを作成し、管理するためのサービスであり、中央のITサービスチームやガバナンス／コンプライアンスチームが使用します。`
	}, {
		id: 4,
		question: `過剰に供給されたAWSリソースと供給不足のAWSリソースを特定し、それによる問題解消のための提案を得るために、どのAWSサービスを使用することが最適ですか？`,
		options: [`AWS Budgets`, `AWS Service Catalog`, `AWS CloudWatch`, `AWS Compute Optimizer`],
		multipleAnswers: false,
		correctAnswers: [`AWS Compute Optimizer`],
		explanation: `AWS Compute Optimizerを使用すると、ワークロードに最適な計算リソースを特定できます。これは、過剰なリソースの供給や供給不足に関する提案を提供するための最適なサービスです。`
	}, {
		id: 5,
		question: `AWS Compute Optimizerが提供する情報はどのように使われますか？`,
		options: [`AWSリソースがどれだけ効率的に使用されているかを判断する`, `AWSの全リソースのカタログを作成する`, `AWSサービスの使用状況とコストに基づいて最適化を推奨する`, `AWSのリソースを自動的にスケーリングする`],
		multipleAnswers: false,
		correctAnswers: [`AWSリソースがどれだけ効率的に使用されているかを判断する`],
		explanation: `AWS Compute Optimizerを使用すると、リソース利用効率のメトリクスと推奨を一元化して表示でき、AWSリソースがどれだけ効率的に使用されているかを判断することができます。`
	}]
}, {
	id: 15,
	question: `大規模データ分析企業が、その全生データをAmazon S3に保管しています。四半期ごとの数日間と年末に、ペタバイト規模のデータが解析プラットフォームで処理されることが求められています。この処理済みのデータは、企業の四半期業績レビュー会議（QBR）および年末の年次レビュー会議で利用されます。サービスの一環として、c5.xlargeのEC2インスタンスでホストされる10ノードのAmazon EMRクラスタを通じてS3のデータを扱い、最終的にデータをAmazon Redshiftに保存する予定です。あなたは企業のソリューションアーキテクトで、CTOより全ソリューションのコスト最適化の指示が出されています。以下の選択肢から、あなたが選ぶのはどれでしょうか？`,
	options: [`生データをS3標準低頻度アクセスで保存し、EMRクラスタはEC2オンデマンドインスタンスでホストし、Redshiftは予約インスタンスを利用する`, `S3 Intelligent Tierで生データを保管し、EMRクラスタはEC2のオンデマンドインスタンスでホストし、Redshiftは予約インスタンスを利用する`, `生データをS3標準で保存し、EMRクラスタはEC2スポットインスタンスでホストし、Redshiftは予約インスタンスを利用する`, `生データをS3標準低頻度アクセスで保存し、EMRクラスタはEC2予約インスタンスでホストし、Redshiftは予約インスタンスを利用する`],
	multipleAnswers: false,
	correctAnswers: [`生データをS3標準で保存し、EMRクラスタはEC2スポットインスタンスでホストし、Redshiftは予約インスタンスを利用する`],
	explanation: `選択肢Aは不適切です。なぜなら、S3標準低頻度アクセスは1GB単位での取り出しに料金が発生し、ペタバイト規模のデータを取り出そうとすると、S3標準よりも高額なコストが発生します。体系的にみて、S3標準低頻度アクセスは長期保存、バックアップ、及び災害時にデータを復旧するために最適です。また、EMRのためのオンデマンドインスタンスはスポットインスタンスに比べて高額なため、Redshiftの予約インスタンスは適切であるものの、S3の生データとEMRのためのEC2インスタンスはコストの観点から不適切な選択です。 選択肢Bでも不適切です。S3 Intelligent Tierはアクセスがごく稀な場合にのみ有利性があります。Deep Archive Access Tierが活用できることにより、ストレージコストを90％以上節約することができます。ファイルが定期的にアクセスされるため、最終的にはS3 Intelligent Tieringを活用して節約することはほぼ無いでしょう。さらに、EMRにおけるEC2オンデマンドはスポットインスタンスに比べて著しく高額です。 選択肢Cが最も適切な選択です。なぜなら、S3標準、EMRのスポットインスタンス、Redshiftの予約インスタンスが、コスト最適化の観点から最も効率的であるからです。 選択肢Dも不適切です。S3標準低頻度アクセスは取り出しごとにGB単位で請求されるため、ペタバイト規模のデータの取り出しにはS3標準よりもコストが高くなります。EMRにおけるEC2予約インスタンスも、それが四半期ごとに使用されることを考えると、過剰なコストが発生し、スポットインスタンスが最適となります。`,
	subQuestions: [{
		id: 1,
		question: `Amazon S3のストレージクラス「標準低頻度アクセス」はどのような用途に適していますか？`,
		options: [`高頻度でアクセスするデータの保存`, `長期保存、バックアップ、災害時のデータ復旧など`, `ペタバイト規模のデータの高頻度アクセス`, `短期間の一時的なデータ保存`],
		multipleAnswers: false,
		correctAnswers: [`長期保存、バックアップ、災害時のデータ復旧など`],
		explanation: `S3標準低頻度アクセスは長期保存、バックアップ、災害時のデータ復旧などに適しています。高頻度でアクセスするデータには不向きであり、取り出しに料金が発生します。`
	}, {
		id: 2,
		question: `Amazon EC2の「スポットインスタンス」と「オンデマンドインスタンス」のコストの違いは何ですか？`,
		options: [`スポットインスタンスの方がコストが高い`, `オンデマンドインスタンスの方がコストが高い`, `両者のコストは同じ`, `スポットインスタンスとオンデマンドインスタンスのコストの違いはない`],
		multipleAnswers: false,
		correctAnswers: [`オンデマンドインスタンスの方がコストが高い`],
		explanation: `オンデマンドインスタンスは使用した分だけ料金を支払う方式で、スポットインスタンスと比べてコストが高いです。スポットインスタンスは余剰容量を利用する形で、大幅に割引された価格で利用することができます。`
	}, {
		id: 3,
		question: `S3 Intelligent Tieringはどのような使用ケースに適していますか?`,
		options: [`高頻度でアクセスするデータの保存`, `予想外の多量のデータアクセス`, `アクセスがごく稀なデータの保存`, `短期間の一時的なデータ保存`],
		multipleAnswers: false,
		correctAnswers: [`アクセスがごく稀なデータの保存`],
		explanation: `S3 Intelligent Tieringは、アクセスがごく稀なデータの保存に適しています。行使されるデータに応じて最適なストレージ層を自動的に選択し、コストを最適化します。定期的にアクセスされるデータには適していません。`
	}, {
		id: 4,
		question: `Amazon Redshiftにおいて、予約インスタンスを何の目的で使用しますか？`,
		options: [`コストを節約するため`, `パフォーマンスを向上させるため`, `短期間で大量のデータを処理するため`, `アクセス頻度が低いデータの保存のため`],
		multipleAnswers: false,
		correctAnswers: [`コストを節約するため`],
		explanation: `Redshiftの予約インスタンスはあらかじめ必要な期間を確保することで、オンデマンドインスタンスと比べてコストを大幅に節約することができます。パフォーマンス向上や短期間での大量データ処理への影響はありません。`
	}, {
		id: 5,
		question: `Amazon EMRクラスタのコスト最適化のために適切なEC2インスタンスの利用形態はどれですか？`,
		options: [`予約インスタンス`, `オンデマンドインスタンス`, `スポットインスタンス`, `Dedicated Hosts`],
		multipleAnswers: false,
		correctAnswers: [`スポットインスタンス`],
		explanation: `Amazon EMRクラスタのコスト最適化のためには、スポットインスタンスの使用が適当です。スポットインスタンスは余剰容量を利用する形で、大幅に割引された価格で利用することができます。予約インスタンスやオンデマンドインスタンスの利用は四半期ごとに大量のデータを処理するケースではコストが高くなる可能性があります。`
	}]
}, {
	id: 16,
	question: `ある製造業の会社が、自社のオンプレミスにあるアプリケーション、データベース、サーバーをAWSに転送する計画を立てています。彼らは、現行のサーバーを調査し、移行を戦略的に検討し、各アプリケーションの転送状況を統合的に管理できる場所が欲しいと考えています。あなたは転送のエキスパートとして雇われ、彼らのアプリケーションを分析し、最適な戦略とツールを提言し、転送および近代化をスケールで達成するための推奨を行うことが求められています。この会社の要望を満たすためには、どのAWSサービスが有用でしょうか？`,
	options: [`オンプレミスのサーバーにAWSアプリケーションディスカバリエージェントを設置し、アプリケーションとその設定、パフォーマンスなど詳細情報を収集します。これらの情報をもとにmoveationを戦略的に検討します。`, `AWSサーバーマイグレーションサービスを活用し、全ての転送リレーテッドの分析を行った上で、オンプレミスのアプリケーション、データベース、サーバーをAWSに転送します。`, `オンプレミスのサーバー、アプリケーション、およびデータベースのためにAWSサービスカタログを構成し、転送戦略を作るために必要な全ての情報を集めます。`, `AWS Migration Hubを活用し、オンプレミスのサーバー詳細を調査またはインポートし、転送計画、戦略を策定し、進行具体行動に従って、転送をシンプルで直観的なダッシュボードで追跡します`],
	multipleAnswers: false,
	correctAnswers: [`AWS Migration Hubを活用し、オンプレミスのサーバー詳細を調査またはインポートし、転送計画、戦略を策定し、進行具体行動に従って、転送をシンプルで直観的なダッシュボードで追跡します`],
	explanation: `選択肢Aは間違いです。というのも、AWSアプリケーションディスカバリエージェントは、クラウドへの転送をするアプリケーションをhostしているサーバーにインストールするソフトウェアです。これらのエージェントは、システム設定、システムパフォーマンス、稼働中のプロセス及びシステム間のネットワーク接続詳細などを収集します。しかしながら、このケースでは顧客は異なる要望があり、全体の転送を検討し、策定をし、追跡するための戦略的なプラットフォームが必要です。選択肢Bは間違いです。なぜならば、AWSサーバーマイグレーションサービス(SMS)は主にリフト・シフト転送モデルに使用されます。それと同じように、それは上記の顧客の要望に合致しません。選択肢Cも間違っています。なぜなら、AWSサービスカタログを使用すると、ITサービス、アプリケーション、リソース、メタデータを集中的にデプロイして、インフラストラクチャ（IaC）テンプレートの一貫性がある規範遵守を先導することができます。AWSサービスカタログを使用すると、顧客が必要としている認可済みのITサービスを迅速にデプロイができ、コンプライアンス要件を満たすことができます。選択肢Dが正解です。なぜなら、AWS Migration Hubを使うと、オンプレミスのサーバー詳細の調査またはインポート、転送計画の作成、転送および近代化の戦略と活動計画の作成、シンプルで直観的な転送ダッシュボードでの追跡が可能です。`,
	subQuestions: [{
		id: 1,
		question: `AWS Migration Hubの主な機能は何ですか？`,
		options: [`オンプレミスのサーバー詳細の調査またはインポート`, `転送計画の作成`, `転送および近代化の戦略と活動計画の作成`, `シンプルで直観的な転送ダッシュボードでの追跡`, `すべて上記の通り`],
		multipleAnswers: false,
		correctAnswers: [`すべて上記の通り`],
		explanation: `AWS Migration Hubを使うと、オンプレミスのサーバー詳細の調査またはインポート、転送計画の作成、転送および近代化の戦略と活動計画の作成、シンプルで直観的な転送ダッシュボードでの追跡が可能です。`
	}, {
		id: 2,
		question: `AWSアプリケーションディスカバリエージェントの主な目的は何ですか？`,
		options: [`クラウドへの転送をするアプリケーションをホストしているサーバーに設定する`, `全体の転送を検討し、策定をし、追跡するためのプラットフォームを提供する`, `アプリケーション、リソース、メタデータをデプロイする`, `サーバーの性能を監視する`],
		multipleAnswers: false,
		correctAnswers: [`クラウドへの転送をするアプリケーションをホストしているサーバーに設定する`],
		explanation: `AWSアプリケーションディスカバリエージェントは、クラウドへの転送をするアプリケーションをホストしているサーバーにインストールするソフトウェアです。`
	}, {
		id: 3,
		question: `AWSサーバーマイグレーションサービス(SMS)は主にどの転送モデルに使用されますか？`,
		options: [`リフト・シフト転送モデル`, `移行転送モデル`, `最適化転送モデル`, `アップグレード転送モデル`],
		multipleAnswers: false,
		correctAnswers: [`リフト・シフト転送モデル`],
		explanation: `AWSサーバーマイグレーションサービス(SMS)は主にリフト・シフト転送モデルに使用されます。`
	}, {
		id: 4,
		question: `AWSサービスカタログを使用すると、どのようなことが可能になりますか？`,
		options: [`ITサービス、アプリケーション、リソース、メタデータを集中的にデプロイする`, `全体の転送を検討し、策定をし、追跡するためのプラットフォームを提供する`, `転送および近代化の戦略と活動計画を作成する`, `サーバーの性能を監視する`],
		multipleAnswers: false,
		correctAnswers: [`ITサービス、アプリケーション、リソース、メタデータを集中的にデプロイする`],
		explanation: `AWSサービスカタログを使用すると、ITサービス、アプリケーション、リソース、メタデータを集中的にデプロイして、インフラストラクチャ（IaC）テンプレートの一貫性がある規範遵守を先導することが可能になります。`
	}, {
		id: 5,
		question: `AWS Migration HubとAWSサーバーマイグレーションサービス(SMS)の主な違いは何ですか？`,
		options: [`AWS Migration Hubは全体の転送を検討し、策定をし、追跡するプラットフォームを提供し、SMSはリフト・シフト転送モデルに使用される。`, `AWS Migration Hubは転送および近代化の戦略と活動計画を作成でき、SMSはITサービス、アプリケーションを集中的にデプロイする。`, `AWS Migration Hubはサーバーの詳細情報を収集し、SMSではサーバーの性能を監視する。`, `AWS Migration HubとSMSの主な機能は同じだが、使用するクラウドプラットフォームが異なる。`],
		multipleAnswers: false,
		correctAnswers: [`AWS Migration Hubは全体の転送を検討し、策定をし、追跡するプラットフォームを提供し、SMSはリフト・シフト転送モデルに使用される。`],
		explanation: `AWS Migration Hubは、全体の転送を検討し、策定をし、追跡するための戦略的なプラットフォームを提供します。一方、AWSサーバーマイグレーションサービス(SMS)は、リフト・シフト転送モデルに主に使用されます。`
	}]
}, {
	id: 17,
	question: `あなたは旅行代理店のITコンサルタントです。クラウド移行の助力を求めてある企業から依頼がきました。現在、アプリケーションポートフォリオ評価フェーズのガイドとして企業の評価をサポートしています。時間が制限されており、評価に関係のない活動への時間の浪費を避ける必要があります。次のうち、AWSクラウドへの移行におけるアプリケーションポートフォリオ評価フェーズの要素でない活動はどれ？（2つ選択）`,
	options: [`ポートフォリオの発見と初期計画`, `優先アプリケーションの調査`, `ポートフォリオの分析と移行戦略の策定`, `カットオーバー(切り替え)ラボの設立`, `ランディングエリアの構築`, `定常評価と改行の提供`],
	multipleAnswers: true,
	correctAnswers: [`カットオーバー(切り替え)ラボの設立`, `ランディングエリアの構築`],
	explanation: `選択肢DとEが正解です。これらの活動はアプリケーションポートフォリオ評価フェーズの一部ではありません。カットオーバーランブックの確立は移行と近代化のフェーズの一部であり、ランディングゾーンの構築はAWSへの移行プロセスのモビライズステージで行います。他のオプションA、B、C、Fは、AWSクラウドへの移行におけるアプリケーションポートフォリオ評価フェーズの活動の一部です。`,
	subQuestions: [{
		id: 1,
		question: `AWSクラウドへの移行における「アプリケーションポートフォリオ評価フェーズ」が含むアクティビティは何ですか？`,
		options: [`ポートフォリオの発見と初期計画`, `サービスのモニタリングと管理`, `カットオーバー(切り替え)ラボの設立`, `ユーザーデータのバックアップと保存`],
		multipleAnswers: false,
		correctAnswers: [`ポートフォリオの発見と初期計画`],
		explanation: `「アプリケーションポートフォリオ評価フェーズ」では、ポートフォリオの発見と初期計画が行われます。他の選択肢はこのフェーズに含まれません。`
	}, {
		id: 2,
		question: `AWSクラウドへの移行の「カットオーバー(切り替え)ラボの設立」は何を意味しますか？`,
		options: [`新しい環境に切り替えるための試行プロセスを設立すること`, `既存のシステムを分析し、移行戦略を策定すること`, `システムを評価し、改善策を提供すること`, `ネットワーク接続やセキュリティ対策等、クラウド環境を構築すること`],
		multipleAnswers: false,
		correctAnswers: [`新しい環境に切り替えるための試行プロセスを設立すること`],
		explanation: `「カットオーバー(切り替え)ラボの設立」は新しい環境への切り替えをための試行プロセスを設立することを指します。これは通常、移行と近代化のフェーズで行われます。`
	}, {
		id: 3,
		question: `「ランディングエリアの構築」とは何を意味しますか？`,
		options: [`新たに移行するアプリケーションの適用範囲を予測すること`, `AWSクラウド上に新規環境を構築しデータとアプリケーションを収容する準備をすること`, `ポートフォリオ全体の調査と計画を行うこと`, `移行後のアプリケーションのパフォーマンスを評価するエリアを構築`],
		multipleAnswers: false,
		correctAnswers: [`AWSクラウド上に新規環境を構築しデータとアプリケーションを収容する準備をすること`],
		explanation: `「ランディングエリアの構築」はAWSクラウド上に新規環境を構築し、データとアプリケーションを収容する準備をすることを意味します。これはAWSの移行プロセスのモビライズステージで行われます。`
	}, {
		id: 4,
		question: `移行フェーズの中でも非効率的とされる行為は何ですか？`,
		options: [`アプリケーションの選択と移行計画`, `移行後の運用環境の設定と保守`, `評価結果に基づいた改善策の提供と実行`, `アプリケーションポートフォリオ評価フェーズでのランディングエリアの構築とカットオーバーラボの設立`],
		multipleAnswers: false,
		correctAnswers: [`アプリケーションポートフォリオ評価フェーズでのランディングエリアの構築とカットオーバーラボの設立`],
		explanation: `アプリケーションポートフォリオ評価フェーズでは、ランディングエリアの構築とカットオーバーラボの設立は無駄となる場合があります。これらの活動は通常、移行と近代化のフェーズやモビライズステージで行われます。`
	}, {
		id: 5,
		question: `アプリケーションポートフォリオ評価フェーズで重要な要素は何ですか？`,
		options: [`既存システムの運用と保守`, `ポートフォリオの発見と初期計画`, `新しく追加されるアプリケーションの設計と開発`, `移行後のシステムのモニタリングと最適化`],
		multipleAnswers: false,
		correctAnswers: [`ポートフォリオの発見と初期計画`],
		explanation: `アプリケーションポートフォリオ評価フェーズでは、ポートフォリオの発見と初期計画が重要な要素です。これにより、企業は最適な移行戦略を策定することが可能になります。`
	}]
}, {
	id: 18,
	question: `あなたは政府系研究機関のソリューションアーキテクトを担当しています。最近のクラウドセキュリティチームによる監査の結果、複数のアカウントに散在する多くのリソースがコンプライアンス基準を満たしていないことが明らかになりました。組織のCTOは、全てのAWSリソースに適用可能なコンプライアンス基準のパッケージを制定・実装するフレームワークの構築を指示しました。これには、クラウドセキュリティオフィサーが定めたルールと修正策が含まれます。加えて、このフレームワークには報告機能が必要で、リソースがコンプライアンスを満たしていない状態にある時間を最小限にすることが求められています。次の選択肢のうち、この目標を達成するのに最も適しているのは何でしょうか？`,
	options: [`リソース作成時に、クラウドセキュリティオフィサーが定めたすべてのコンプライアンスルールをAWS Elastic Beanstalkに組み込む。`, `AWSシステムマネージャーのRunコマンドを用いて、すべてのコンプライアンスチェックとパッチ適用を自動化する。`, `クラウドセキュリティオフィサーに対して、AWSシステムマネージャーのコンプライアンスサービスにてルールを定義することを提案する。`, `AWS Configにてすべてのルールと修復アクションを定義し、AWS Config Conformance Packsを用いてAWS Configのルールと修復アクションを単一エンティティとして展開する。`],
	multipleAnswers: false,
	correctAnswers: [`AWS Configにてすべてのルールと修復アクションを定義し、AWS Config Conformance Packsを用いてAWS Configのルールと修復アクションを単一エンティティとして展開する。`],
	explanation: `オプションAは不適切です。AWS Elastic Beanstalkはアプリケーションのデプロイや管理を迅速に行うサービスですが、エンティティのコンプライアンスチェックや管理は提供しません。 オプションBは不適切です。AWSシステムマネージャーのRunコマンドは大規模な設定変更を一度に行うためのツールであり、コンプライアンスルールを定義することはできません。 オプションCは不適切です。AWSシステムマネージャーのコンプライアンスは、パッチのコンプライアンスや設定の統一性を管理ノードやAmazon EC2、オンプレミスサーバーや仮想マシンを監視することで確保します。ただし、すべてのリソースに対してコンプライアンスを適用する目的とはマッチしていません。 オプションDが最も適切です。AWS Config Conformance Packsは、AWS Configのルールと修正策をまとめて、単一エンティティとしてアカウントやリージョン、またはAWS Organizations全体でデプロイすることができます。これにより、要件に対するコンプライアンスを維持することが可能です。`,
	subQuestions: [{
		id: 1,
		question: `AWS Elastic Beanstalkの主な用途は何ですか？`,
		options: [`アプリケーションのデプロイや管理`, `クラウドセキュリティの管理`, `データの分析と可視化`, `コンプライアンス基準のパッケージ作成と実装`],
		multipleAnswers: false,
		correctAnswers: [`アプリケーションのデプロイや管理`],
		explanation: `AWS Elastic Beanstalkはアプリケーションのデプロイや管理を迅速に行うことができるサービスです。コンプライアンス基準のパッケージ作成や実装、クラウドセキュリティの管理、データの分析と可視化などは直接的な支援は提供していません。`
	}, {
		id: 2,
		question: `AWSシステムマネージャーのRunコマンドは何に使用されますか？`,
		options: [`大規模な設定の変更を一度に行う`, `データのバックアップと復元`, `クラウドセキュリティの管理`, `コンプライアンス基準のパッケージ作成と実装`],
		multipleAnswers: false,
		correctAnswers: [`大規模な設定の変更を一度に行う`],
		explanation: `AWSシステムマネージャーのRunコマンドは、大規模な設定変更を一度に行うことができるツールです。データのバックアップや復元、クラウドセキュリティの管理、コンプライアンス基準のパッケージ作成や実装などを直接的に支援するものではありません。`
	}, {
		id: 3,
		question: `AWSシステムマネージャーのコンプライアンスサービスの主な機能は何ですか？`,
		options: [`パッチのコンプライアンスや設定の統一性を服务`, `全てのAWSリソースのコンプライアンスチェック`, `データの分析と可視化`, `APIエンドポイントの管理`],
		multipleAnswers: false,
		correctAnswers: [`パッチのコンプライアンスや設定の統一性を服务`],
		explanation: `AWSシステムマネージャーのコンプライアンスサービスは、パッチのコンプライアンスや設定の統一性を管理ノードやAmazon EC2、オンプレミスサーバや仮想マシンを監視することで確保します。全てのAWSリソースのコンプライアンスチェックやデータの分析と可視化、APIエンドポイントの管理を直接的に支援するものではありません。`
	}, {
		id: 4,
		question: `AWS ConfigのConformance Packsは何に使用できますか？`,
		options: [`AWS Configのルールと修復アクションを単一エンティティとしてアカウントやリージョン、またはAWS Organizations全体でデプロイする`, `APIエンドポイントの管理`, `ネットワークトラフィックの分析`, `データのバックアップと復元`],
		multipleAnswers: false,
		correctAnswers: [`AWS Configのルールと修復アクションを単一エンティティとしてアカウントやリージョン、またはAWS Organizations全体でデプロイする`],
		explanation: `AWS ConfigのConformance Packsは、AWS Configのルールと修復策をまとめて、単一エンティティとしてアカウントやリージョン、またはAWS Organizations全体でデプロイすることができます。これにより、要件に対するコンプライアンスを維持することが可能となります。それ以外のオプションについては、直接的な支援は提供していません。`
	}, {
		id: 5,
		question: `AWS Configは何のためのツールですか？`,
		options: [`リソースのコンフィギュレーション履歴を追跡し、設定の変更を自動的に評価する`, `データのバックアップと復元`, `APIエンドポイントの管理`, `ネットワークトラフィックの分析`],
		multipleAnswers: false,
		correctAnswers: [`リソースのコンフィギュレーション履歴を追跡し、設定の変更を自動的に評価する`],
		explanation: `AWS Configは、リソースのコンフィギュレーション履歴を追跡し、設定の変更を自動的に評価するためのツールです。これにより、AWSリソースの設定があなたの組織内のガバナンスポリシーに従っていることを確認できます。それ以外のオプションについては、直接的な支援は提供していません。`
	}]
}, {
	id: 19,
	question: `AWSへの移行の優先順位を設定する際、初期の基準を設けることで、パイロットプロジェクトに適したワークロードが選択されます。次の中から、移行を最も優先すべきアプリケーションを特定するための基準はどれでしょうか？`,
	options: [`ビジネスへの影響度 = 高, 使用するコンピューティングインスタンスの数 = 11以上, 移行戦略 = リファクタリング/再構築`, `ビジネスへの影響度 = 高, 使用するコンピューティングインスタンスの数 = 4-10, 移行戦略 = リロケーション`, `ビジネスへの影響度 = 中, 使用するコンピューティングインスタンスの数 = 1-3, 移行戦略 = リプラットフォーム`, `ビジネスへの影響度 = 低, 使用するコンピューティングインスタンスの数 = 1-3, 移行戦略 = リホスティング`],
	multipleAnswers: false,
	correctAnswers: [`ビジネスへの影響度 = 低, 使用するコンピューティングインスタンスの数 = 1-3, 移行戦略 = リホスティング`],
	explanation: `オプションDでは、優先度の範囲で最高のスコアを得られます。アプリケーションの優先度を断定する際には、リスクと複雑性の少ないワークロードを優先する初期基準を設定することが重要で、これらはパイロットプロジェクトとして適しています。初回のクラウド移行からリスクや複雑性の少ないワークロードを選ぶことで、リスクは最小限に留められ、チームが経験を積む機会も作られます。ビジネスへの影響度が最も低く、さらにクラウドに移行可能な、リホスティングやリフト&シフトといった移行戦略に該当するアプリケーションを選びます。`,
	subQuestions: [{
		id: 1,
		question: `AWSへの移行戦略として、既存のアプリケーションをそのままクラウドに移す戦略を何と呼びますか？`,
		options: [`リホスティング`, `リプラットフォーム`, `リファクタリング/再構築`, `リロケーション`],
		multipleAnswers: false,
		correctAnswers: [`リホスティング`],
		explanation: `既存のアプリケーションをそのままクラウドに移す戦略はリホスティング、またはリフト＆シフトと呼ばれます。この戦略は、アプリケーションをそのままクラウドに移動するため、リスクは比較的少ないです。`
	}, {
		id: 2,
		question: `AWSへの移行戦略として、アプリケーションをクラウド用に修正する戦略を何と呼びますか？`,
		options: [`リホスティング`, `リプラットフォーム`, `リファクタリング/再構築`, `リロケーション`],
		multipleAnswers: false,
		correctAnswers: [`リプラットフォーム`],
		explanation: `アプリケーションをクラウド用に修正する戦略はリプラットフォームと呼ばれます。この戦略では、一部のアプリケーションの要素が変更され、クラウドの特性をより利用できるようになります。`
	}, {
		id: 3,
		question: `AWSへの移行戦略として、アプリケーションを一から再設計する戦略を何と呼びますか？`,
		options: [`リホスティング`, `リプラットフォーム`, `リファクタリング/再構築`, `リロケーション`],
		multipleAnswers: false,
		correctAnswers: [`リファクタリング/再構築`],
		explanation: `アプリケーションを一から再設計する戦略はリファクタリング/再構築と呼ばれます。この戦略では、アプリケーションは完全に一新され、クラウドの特性を最大限に利用するように設計されます。`
	}, {
		id: 4,
		question: `AWSへのパイロットプロジェクトとして、選択すべきアプリケーションのビジネスへの影響度はどれを選びますか？`,
		options: [`ビジネスへの影響度 = 高`, `ビジネスへの影響度 = 中`, `ビジネスへの影響度 = 低`],
		multipleAnswers: false,
		correctAnswers: [`ビジネスへの影響度 = 低`],
		explanation: `パイロットプロジェクトとしてクラウドに移行すべきアプリケーションの選択基準として、ビジネスへの影響度が最も低いものを選ぶべきです。初めてのクラウド移行はリスクが存在するため、初回から影響度が高いアプリケーションを選ぶと失敗した場合の影響が大きいです。`
	}, {
		id: 5,
		question: `AWSへのパイロットプロジェクトとして選択すべきアプリケーションは、使用するコンピューティングインスタンスの数がどれを選びますか？`,
		options: [`使用するコンピューティングインスタンスの数 = 1-3`, `使用するコンピューティングインスタンスの数 = 4-10`, `使用するコンピューティングインスタンスの数 = 11以上`],
		multipleAnswers: false,
		correctAnswers: [`使用するコンピューティングインスタンスの数 = 1-3`],
		explanation: `パイロットプロジェクトとして選択すべきアプリケーションのコンピューティングインスタンスの数は、可能な範囲で最小のべきです。最初の移行で複雑性を可能な限り減らすことで、事業に大きなリスクを与えずに実施できます。`
	}]
}, {
	id: 20,
	question: `金融の業界における会社が、既存のオンプレミスシステムからAWSへの移行計画を進めています。その目標はビジネスの柔軟性を高め、連続的なビジネスの推進を可能にするため、モノリシックなシステムからマイクロサービスへと乗り換えを検討し始めています。あなたは、その過程の指導役として招かれたソリューションアーキテクトで、ビジネス部門や技術部門との幾度かのミーティングを経て、AWSのサーバーレスサービスを利用し、マイクロサービスを展開することによる移行を計画しています。このシナリオに最適な移行戦略は何でしょうか？`,
	options: [`リロケーション`, `リプラットフォーム`, `リファクタリング（右向き）`, `リホスト`],
	multipleAnswers: false,
	correctAnswers: [`リファクタリング（右向き）`],
	explanation: `オプション1は間違っています。なぜなら、リロケーションは、既にVMwareやコンテナで稼働しているアプリケーションを、クラウドへ移行させるために使用されます。これにより、管理が容易になり、スケーラビリティの向上によるコスト削減も可能となります。しかし、現状のシナリオには適切なものではありません。 オプション2も間違っています。リプラットフォームは、'リフト、ティンク、シフト'または'リフト、リシェイプ'とも言います。わずかな修正を加えるだけで、多数のアプリケーションをクラウドネイティブのサービスに適応できます。例えば、Amazon RDSを使うことでデータベースの管理負荷を軽減したり、LinuxやApache Tomcatのようなオープンソースのソフトウェアを使うことでライセンス費用を抑えることが可能です。しかし、ここでも現状のシナリオに対する正解は得られません。 オプション3は正解です。リファクタリング、つまり再設計または'クラウド対応のデカップリングとリライト'は、大きな投資が必要となりますが、同時に大きなリターンも期待できます。新しい機能やパフォーマンス、スケーラビリティなど、強力なビジネスニーズが推進力となります。旧式で疲弊したレガシーアプリケーションをクラウドネイティブにリファクタリング（再設計）することは、クラウドへの移行が最も必要とされる理由の一つとなります。本シナリオにおいて最適な選択と言えます。 オプション4も間違っています。リホストとは、「リフト・アンド・シフト」のことで、この手法を用いる場合、アプリケーション、そのデータ、およびアクセスは専用のIT環境から共有環境へと移行されます。また、これらのすべてがクラウドベースであるため、将来的なリファクタリングも容易になります。しかし、現在のシナリオには適応しきれません。`,
	subQuestions: [{
		id: 1,
		question: `オンプレミスシステムからAWSへの移行に最も関連する手法はどれですか？`,
		options: [`リロケーション`, `リプラットフォーム`, `リファクタリング（右向き）`, `リホスト`],
		multipleAnswers: false,
		correctAnswers: [`リファクタリング（右向き）`],
		explanation: `リファクタリング、つまり再設計または'クラウド対応のデカップリングとリライト'は、大きな投資が必要となりますが、同時に大きなリターンも期待できます。新しい機能やパフォーマンス、スケーラビリティなど、強力なビジネスニーズが推進力となります。旧式で疲弊したレガシーアプリケーションをクラウドネイティブにリファクタリング（再設計）することは、クラウドへの移行が最も必要とされる理由の一つとなります。`
	}, {
		id: 2,
		question: `金融の業界における会社がビジネスの柔軟性を高めるためには、AWS上でどのようなアーキテクチャを採用するべきですか？`,
		options: [`モノリシックなシステム`, `分散型システム`, `マイクロサービス`, `オンプレミスシステム`],
		multipleAnswers: false,
		correctAnswers: [`マイクロサービス`],
		explanation: `マイクロサービスアーキテクチャは、ビジネスの各部分を独立したサービスとして実装することで、各サービスが独立して拡張と展開が可能になり、ビジネスの柔軟性を高めることができます。`
	}, {
		id: 3,
		question: `一般的に、移行計画の進行中にどのような役割がソリューションアーキテクトに期待されますか？`,
		options: [`すべてのエンジニアリング作業を行う`, `ビジネス部門と技術部門の間のブリッジとなる`, `金融市場の変動を予測する`, `新たなマーケティング戦略を開発する`],
		multipleAnswers: false,
		correctAnswers: [`ビジネス部門と技術部門の間のブリッジとなる`],
		explanation: `ソリューションアーキテクトの主な役割は、ビジネスニーズと技術解決策の間のギャップを埋めることであり、これにはビジネス部門と技術部門の間で通信する能力が不可欠です。`
	}, {
		id: 4,
		question: `AWSのサーバーレスサービスを利用してマイクロサービスを展開するメリットは何ですか？`,
		options: [`コストをかけずに無限のスケーリングが可能`, `オンプレミスシステムと同じようにサーバーを管理する必要がある`, `サービスの実装自体が不要になる`, `アプリケーションの全ての部分を一度に展開する必要がある`],
		multipleAnswers: false,
		correctAnswers: [`コストをかけずに無限のスケーリングが可能`],
		explanation: `サーバーレスの主な利点は、開発者がサーバーのプロビジョニング、パッチ適用、および管理を心配せずにアプリケーションを運用できることです。また、サーバーレスアーキテクチャは、必要なリソース量に応じて自動的にスケーリングします。そのため、コスト効率が高く、大規模なトラフィックに対しても対応可能です。`
	}, {
		id: 5,
		question: `リロケーションとは、具体的にどのような移行戦略のことを指しますか？`,
		options: [`既存のシステムを物理的に別の場所に移動する戦略`, `既にVMwareやコンテナで稼働しているアプリケーションを、クラウドへ移行させる戦略`, `アプリケーション、そのデータ、およびアクセスは専用のIT環境から共有環境へと移行する戦略`, `多数のアプリケーションをクラウドネイティブのサービスにわずかな修正を加えて適応する戦略`],
		multipleAnswers: false,
		correctAnswers: [`既にVMwareやコンテナで稼働しているアプリケーションを、クラウドへ移行させる戦略`],
		explanation: `リロケーションは、既にVMwareやコンテナで稼働しているアプリケーションを、クラウドへ移行させるために使用されます。これにより、管理が容易になり、スケーラビリティの向上によるコスト削減も可能となります。`
	}]
}, {
	id: 22,
	question: `教育技術分野の企業がクラウドへの移行を検討しており、開発と運用のプロセスにベストプラクティスを導入しようとしています。最近、企業はAWSの月間支払いが急激に増加したことに気付きました。詳細な調査の結果、一部の開発者が誤って、対応予定外のリージョンでいくつかのAmazon EC2とRDSインスタンスを立ち上げていたことが判明しました。あなたは開発者の権限を最小限に抑えつつ、Active Directoryを使ってオンプレミスとAWSクラウドリソースへのアクセスを管理するベストプラクティスを築くために雇われました。開発者がAWS管理コンソールへのアクセスを制限することによりコストを制御する役割を担いつつ、開発者の生産性を低下させることなく、開発者がEC2及びRDSインスタンスをeu-west-1リージョンだけで立ち上げられるようにする事が求められています。DevOpsチームの運用負荷を最小限に抑えるために、新たなセキュリティ要件を如何に満たすべきでしょうか？`,
	options: [`A. 各開発者に対してIAMユーザーを作成し、それぞれの開発者をPowerUserAccess管理ポリシーが割り当てられた開発者向けIAMグループに登録します。開発者がeu-west-1リージョンでのみEC2及びRDSインスタンスを立ち上げるためのカスタムポリシーを適用します。`, `B. PowerUserAccess管理ポリシーが割り当てられたIAMロールに関連付けられたSAMLベースの認証を設定します。eu-west-1を除く全てのAWSリージョンにおけるEC2及びRDSへのアクセスを拒否するカスタムポリシーを適用します。`, `C. AWS Configへのアクセスを除いて、全ての開発者のAWSサービスへのアクセスを拒否するカスタムポリシーと、PowerUserAccess管理ポリシーが割り当てられたIAMロールに関連付けられたSAMLベースの認証を設定します。AWS Configで、eu-west-1リージョンのみEC2及びRDSサービスを有するプロダクトを作成します。`, `D. AWS Service Catalogへのアクセスを除いて、全ての開発者のAWSサービスへのアクセスを拒否するカスタムポリシーと、PowerUserAccess管理ポリシーが割り当てられたIAMロールに関連付けられたSAMLベースの認証を設定します。AWS Service Catalogで、eu-west-1リージョンのみEC2及びRDSサービスを有するプロダクトを作成します。`],
	multipleAnswers: false,
	correctAnswers: [`B. PowerUserAccess管理ポリシーが割り当てられたIAMロールに関連付けられたSAMLベースの認証を設定します。eu-west-1を除く全てのAWSリージョンにおけるEC2及びRDSへのアクセスを拒否するカスタムポリシーを適用します。`],
	explanation: `正解は選択肢Bです。IAMユーザを個々の開発者ごとに作成すると、DevOpsチームの運用負荷が増大し、既存のActive Directoryを活用するメリットが得られないため、選択肢Aは不適切です。 ユーザがAWS管理コンソールにアクセスするための認可を付与するSAML 2.0準拠のIDプロバイダ（IdP）とAWSを設定し、SAMLロールを使用します。このシナリオでは、企業はオンプレミスとAWSクラウドリソースへのアクセスをActive Directoryを使って管理したいので、SAML 2.0連携ユーザを使用してAWS管理コンソールにアクセスすれば良いでしょう。 必要なアクセス権限を付与するためのPowerUserAccess管理ポリシーと、SAMLプロバイダを初期化として設定した信頼ポリシーを持つIAMロールを作成します。これにより、組織とAWSとの間に信頼関係が形成されます。このケースでは、PowerUserAccess管理ポリシーがロールに割り付けられるため、開発者が任意のリージョンでRDSインスタンスを作成する許可を与えるため、eu-west-1を除く全てのAWSリージョンにおけるEC2、RDSへのアクセスを防ぐためのカスタムポリシーも必要となります。なお、PowerUserAccessは正確に必要なアクセス権限を提供するため、最小権限原則は遵守されます。 選択肢CとDは、このケースとは関係ないAWS Config や AWS Service Catalog を使って制限をかける内容となっているため、不適切です。AWS Config はAWSリソースの設定と関係性を継続的に評価、監査するツール、AWS Service Catalogは承認されたITサービスをAWS内で整理、管理するためのサービスであり、今回の問題に必要なセキュリティ制限を設けるものではありません。また、開発者に対してAWSサービス全てのアクセスを制限するという提案も、このケースで求められているのはEC2とRDSインスタンスの利用制限のみで、他の全てのサービスについてはアクセス制限をかける必要はないため、不適切です。`,
	subQuestions: [{
		id: 1,
		question: `オンプレミスとAWSクラウドリソースへのアクセスを管理するためにActive Directoryと連携するために必要なものは何でしょうか？`,
		options: [`AWS IAM`, `AWS S3`, `AWS EC2`, `AWS RDS`],
		multipleAnswers: false,
		correctAnswers: [`AWS IAM`],
		explanation: `Active Directoryと連携するためには、AWSのIdentity and Access Management (IAM)サービスが必要です。IAMはユーザー、グループ、およびロールの作成と管理に使用され、これらのエンティティにAWSリソースへのアクセス許可を決定します。IAMとActive Directoryとの連携により、オンプレミスユーザーとAWSクラウドリソースの共通認証インフラストラクチャを確立できます。`
	}, {
		id: 2,
		question: `AWSの「PowerUserAccess」管理ポリシーが割り当てられたIAMロールはどのような権限を持っていますか？`,
		options: [`全てのAWSサービスにフルアクセス`, `IAMとBillingを除く全てのAWSサービスにフルアクセス`, `読み取り専用アクセスを全てのAWSサービスに付与`, `IAMとBillingのみアクセス可能`],
		multipleAnswers: false,
		correctAnswers: [`IAMとBillingを除く全てのAWSサービスにフルアクセス`],
		explanation: `「PowerUserAccess」管理ポリシーが割り当てられたIAMロールは、IAMとBillingを除く全てのAWSサービスにフルアクセス権限が付与されます。これによりユーザーはほとんどのAWSリソースを作成、変更、削除することが可能となります。`
	}, {
		id: 3,
		question: `SAML 2.0ベースの認証について、正しい説明を選んでください。`,
		options: [`SAML 2.0は、単一のAWSリソースへのアクセスを許可する認証方式です。`, `SAML 2.0は、複数のAWSリソース間で認証情報を共有する手段を提供します。`, `SAML 2.0は、異なるセキュリティドメイン間の認証と認可データを交換するためのXMLベースのオープンスタンダードです。`, `SAML 2.0は、AWSリソースへのアクセスを一時的に制限するための認証方式です。`],
		multipleAnswers: false,
		correctAnswers: [`SAML 2.0は、異なるセキュリティドメイン間の認証と認可データを交換するためのXMLベースのオープンスタンダードです。`],
		explanation: `SAML 2.0は、異なるセキュリティドメイン間で認証と認可データを交換するためのXMLベースのオープンスタンダードです。これはユーザーがシングルサインオン（SSO）を使用して複数のアプリケーションにアクセスできるようにするためのもので、1つのIDプロバイダ（IdP）で認証され、その認証が他のアプリケーションやサービスに信じられるようにすることが可能です。`
	}, {
		id: 4,
		question: `特定のAWSリージョンにおけるEC2、RDSへのアクセス制限を設けるためにはどのAWSサービスを使用するべきでしょうか？`,
		options: [`AWS IAM`, `AWS S3`, `AWS EC2`, `AWS RDS`],
		multipleAnswers: false,
		correctAnswers: [`AWS IAM`],
		explanation: `特定のAWSリージョンにおけるEC2、RDSへのアクセス制限を設けるためには、AWSのIdentity and Access Management (IAM)サービスを使用すべきです。IAMを使用すると、特定のリージョンに対するEC2、RDSのアクセス制限など、細かいアクセス許可ポリシーを作成できます。`
	}, {
		id: 5,
		question: `AWSの「最小権限原則」とは何でしょうか？`,
		options: [`全てのユーザーに最小限の権限を持たせる原則`, `必要最小限の権限をユーザーまたはプロセスに割り当てる原則`, `全てのユーザーがアクセスできる最小限のAWSサービスを確保する原則`, `AWSサービスへのアクセス権限を最大限に制限する原則`],
		multipleAnswers: false,
		correctAnswers: [`必要最小限の権限をユーザーまたはプロセスに割り当てる原則`],
		explanation: `「最小権限原則」は、必要最小限の権限をユーザーまたはプロセスに割り当てる原則を指します。この原則は、セキュリティのベストプラクティスであり、ユーザーまたはシステムがそのタスクを遂行するのに必要な最低限の権限だけを持つべきであるという考え方を表します。`
	}]
}, {
	id: 30,
	question: `生物医学研究会社ががんなどの厳しい病気に対する斬新な治療法を追求しています。彼らの研究チームは、重要な研究データと情報を共有するため、外部の大学や研究所と頻繁に協業しています。彼らはAmazon S3をクラウドネイティブストレージとして用い、集約されたデータソースを維持しています。新しい共同プロジェクトが突然始まり、ペタバイト規模のデータストレージまたは大量のファイル転送を処理可能なSFTPインフラが必要になりました。なお、会社は重要なデータやファイルへの第三者からのアクセスを許さず、セキュアかつ管理された方法でデータのやり取りを行いたいと考えています。この会社はどのようなソリューションを採用すれば、迅速且つ安全にSFTPインフラを構築できるでしょうか？`,
	options: [`AWS Snowballを使用して、ペタバイト規模のデータを移動し、ファイルを会社からパートナーに転送する。`, `AWS Storage Gatewayを使用して、迅速且つ安全なデータ交換ソリューションをパートナーと実現する。`, `AWS Transfer for SFTPをAWS Transfer Familyから使用して、パートナーとのデータ転送のためのシンプルで信頼性の高いソリューションを提供する。`, `会社とパートナー間でAWS Direct Connectを設定し、AWS DataSyncを使用してデータ移動を自動化し、速度を向上させる。`],
	multipleAnswers: false,
	correctAnswers: [`AWS Transfer for SFTPをAWS Transfer Familyから使用して、パートナーとのデータ転送のためのシンプルで信頼性の高いソリューションを提供する。`],
	explanation: `選択肢A、AWS Snowballは、大量データの移動には有効ですが、注文と配送には時間がかかるため、急な要求に対応するのには不適です。さらに、SFTPインフラを構築する機能はありません。選択肢B、AWS Storage Gatewayは、オンプレミスとクラウドストレージの間のデータ移動を簡単にするためのサービスですが、SFTPインフラの構築には役立たないでしょう。選択肢Cは正しい選択肢で、AWS Transfer for SFTPを使用すれば、既存の認証システムを活用し、数時間で簡単に管理可能なファイル転送と転送ワークフローを最新化できます。選択肢D、AWS Direct ConnectとAWS DataSyncの組み合わせもデータ移動を自動化し、高速化する効果がありますが、設定にはかなりの時間がかかり、またSFTPインフラを構築する機能はないため、不適当です。`,
	subQuestions: [{
		id: 1,
		question: `AWS Transfer for SFTPは何を提供しますか？`,
		options: [`ペタバイト規模のデータを移動するための手段`, `クラウドとオンプレミスとの間でのデータ移動を簡単にするサービス`, `パートナーとのデータ転送のためのシンプルで信頼性の高いソリューション`, `データ移動を自動化し、速度を向上させるためのツール`],
		multipleAnswers: false,
		correctAnswers: [`パートナーとのデータ転送のためのシンプルで信頼性の高いソリューション`],
		explanation: `AWS Transfer for SFTPはパートナーとのデータ転送のためのシンプルで信頼性の高いソリューションを提供します。`
	}, {
		id: 2,
		question: `AWS Snowballの最適な利用ステージは何ですか？`,
		options: [`急なデータ交換の要求に対応するため`, `ペタバイト規模のデータ移動のため`, `ファイルを会社からパートナーに即時転送するため`, `SFTPインフラを構築するため`],
		multipleAnswers: false,
		correctAnswers: [`ペタバイト規模のデータ移動のため`],
		explanation: `AWS Snowballは大量データの移動には有効ですが、注文と配送には時間がかかります。そのため、急な要求や即時のファイル転送には不適で、またSFTPインフラを構築する機能はありません。`
	}, {
		id: 3,
		question: `AWS Storage Gatewayは何のためのサービスですか？`,
		options: [`SFTPインフラを構築するため`, `大量データの移動のため`, `オンプレミスとクラウドストレージの間のデータ移動を簡単にするサービス`, `パートナーとのデータ交換を高速化するため`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスとクラウドストレージの間のデータ移動を簡単にするサービス`],
		explanation: `AWS Storage GatewayはオンプレミスとAWSクラウドストレージとの間でデータをシームレスに移動し統合するサービスですが、SFTPインフラを構築する能力はありません。`
	}, {
		id: 4,
		question: `AWS Direct ConnectとAWS DataSyncの組み合わせの利点は何ですか？`,
		options: [`急なデータ交換の要求に対応できる`, `データ移動を自動化し、速度を向上させる`, `SFTPインフラを構築できる`, `マルチパートナーデータ交換を簡単にする`],
		multipleAnswers: false,
		correctAnswers: [`データ移動を自動化し、速度を向上させる`],
		explanation: `AWS Direct ConnectとAWS DataSyncの組み合わせは、データ移動を自動化し、速度を向上させる効果がありますが、設定には時間がかかり、SFTPインフラの構築または急なデータ交換の要求には対応できません。`
	}, {
		id: 5,
		question: `会社が重要なデータやファイルへの第三者からのアクセスを許さない場合、どのようなサービスが最も適用でしょうか？`,
		options: [`AWS Snowball`, `AWS Storage Gateway`, `AWS Transfer for SFTP`, `AWS Direct Connect`],
		multipleAnswers: false,
		correctAnswers: [`AWS Transfer for SFTP`],
		explanation: `会社が重要なデータやファイルへの第三者からのアクセスを許さない場合、AWS Transfer for SFTPが最も適応でしょう。これは、既存の認証システムを活用しながら、簡単に管理可能なファイル転送と転送ワークフローを最新化できるサービスです。`
	}]
}, {
	id: 31,
	question: `最近企業に入社してから、AWSオーガニゼーション内の複数の組織単位（OUs）を管理する役割を任されました。「FullAWSAccess」SCPが組織の根に関連付けられていて、全てのサービスとアクションが許可されています。別のSCPはOUsに結びついており、一部のAWSサービスの利用や特定のアクション（例：DynamoDBテーブルの削除）を抑制しています。あなたの上司から、開発OUで半年間一度もアクセスされなかった許可されているAWSサービスを特定するように指示されました。これを可能な限り簡易な手段で達成するためにはどうすれば良いでしょうか？`,
	options: [`AWSコンソールのCloudTrail > イベント履歴画面に移動し、過去6ヶ月間にアクセスしたサービスを探し出します。その後、SCPの許可サービスと結果を比較し、アクセスされなかった許可されているサービスを見つけ出します。`, `AWSコンソールのIAM > Access analyzer画面で移動し、AWSオーガニゼーションに新たにアナライザを作成します。「Active findings」をアナライザによってモニタリングし、一度もアクセスされなかったAWSサービスを見つけ出します。`, `AWSコンソールのIAM > Access reports > Organization activity画面に移動し、Development OUを選択し、「Service access report」テーブルに記述されている最終アクセス情報を確認します。`, `AWSコンソールのAWS Organisations > Development OU > Policies画面に移動し、適用されているSCPを選んで、半年間アクセスされていないサービスが存在するかどうかを調査します。`],
	multipleAnswers: false,
	correctAnswers: [`AWSコンソールのIAM > Access reports > Organization activity画面に移動し、Development OUを選択し、「Service access report」テーブルに記述されている最終アクセス情報を確認します。`],
	explanation: `選択肢Aは不正解です。なぜなら、CloudTrailイベント履歴からサービスを探し出すためには多量の手作業が必要となるからです。また、CloudTrailのイベント履歴は最低限の管理イベント90日間しか表示しないためです。選択肢Bは不正解です。なぜなら、AWS IAMアクセスアナライザは直ちにアクセスされていないAWSサービスを見つける機能が無いからです。AWS IAMアクセスアナライザは外部エンティティと共有されたS3バケットなどのリソースを見つけ、レビュー用の調査結果を作成します。「サービスアクセスレポート」選択肢Dは不正解です。なぜなら、ユーザーはOUパネルから適用されたポリシーのみを確認することはできますが、最終アクセスサービスの情報を提供するものではありません。`,
	subQuestions: [{
		id: 1,
		question: `AWSのOrganisation Unit（OU）は何を指すか？`,
		options: [`AWSの全てのリージョン`, `ごっそりAWSサービスの一部`, `AWSオーガニゼーション内の一つまたは複数のAWSアカウントを含む管理単位`, `AWSアカウントのグループ`],
		multipleAnswers: false,
		correctAnswers: [`AWSオーガニゼーション内の一つまたは複数のAWSアカウントを含む管理単位`],
		explanation: `AWSのOrganisation Unit（OU）は、AWSオーガニゼーション内の一つまたは複数のAWSアカウントを含む管理単位を指します。OUを作成して階層的にアカウントを整理し、政策を一元的に管理できます。`
	}, {
		id: 2,
		question: `「FullAWSAccess」SCPが組織の根に関連付けられている場合、どのような権限があると考えられるか？`,
		options: [`全てのAWSサービスへのパーティション全体のアクセスが許可される`, `一部のAWSサービスのみアクセスが許可される`, `このSCPが関連付けられている組織単位に属するAWSアカウントは、AWSサービスを利用することはできない`, `AWSサービスを利用するためには追加の許可が必要になる`],
		multipleAnswers: false,
		correctAnswers: [`全てのAWSサービスへのパーティション全体のアクセスが許可される`],
		explanation: `「FullAWSAccess」SCP（Service Control Policy）が組織の根に関連付けられている場合、このSCPが関連付けられている組織単位（OU）に属するAWSアカウントは、全てのAWSサービスとアクションのアクセスが許可されます。`
	}, {
		id: 3,
		question: `AWSを管理するために役立つツールとしてCloudTrailがありますが、CloudTrailの主な用途は何ですか？`,
		options: [`AWSリソースの使用を監視し、活動を追跡する`, `リソースを自動的にスケーリングする`, `リソースの配置を自動的に変更する`, `特定のタスクを自動化する`],
		multipleAnswers: false,
		correctAnswers: [`AWSリソースの使用を監視し、活動を追跡する`],
		explanation: `AWS CloudTrailは、AWSリソースの使用を監視し、活動を追跡するためのサービスです。特にAWSアカウントのセキュリティ的な観点やオペレーションの監視に役立つものであります。`
	}, {
		id: 4,
		question: `AWS IAMアクセスアナライザは何をするためのものでしょうか？`,
		options: [`AWSの使用状況を分析する`, `AWSサービスの利用料金を分析する`, `アクセス可能なAWSのリソースを見つける`, `AWSサービスのパフォーマンスを分析する`],
		multipleAnswers: false,
		correctAnswers: [`アクセス可能なAWSのリソースを見つける`],
		explanation: `AWS IAMアクセスアナライザは公開されているAWSリソースを見つけてアクセスを評価するサービスです。その結果、ユーザーはAWSリソースの共有状況を把握し、必要に応じてアクセスを適切に調整することができます。`
	}, {
		id: 5,
		question: `AWSの「Service access report」画面で何が確認できるでしょうか？`,
		options: [`AWSサービスのアクセスログ`, `各AWSサービスの利用料金`, `AWSリソースの利用状況`, `AWSサービスへの最終アクセス情報`],
		multipleAnswers: false,
		correctAnswers: [`AWSサービスへの最終アクセス情報`],
		explanation: `AWSの「Service access report」では、AWSサービスへの最終アクセス情報を確認することができます。これにより、どのAWSサービスがいつ最後に利用されたかを追跡し、長期間利用されていないリソースを特定することができます。`
	}]
}, {
	id: 32,
	question: `複数の組織単位（OUs）を持つAWS組織の管理を行っています。ルートでの「FullAWSAccess」SCPのデフォルト設定が無効になっており、全てのサービスの行動は暗黙的に拒否されています。明示的に認可したいサービスを認可するため、ルートとOUsにカスタムポリシーが付けられています。長い間利用されていない認可されているサービスを特定し、これらのサービスを認可リストから消去したいと思っています。この要件を最も適切に満たす方法は何でしょうか？`,
	options: [`A. OUからポリシーを取り外し、CloudTrailを使用して失敗したAPIをモニターして、OUが必要とするサービスを特定します。その後、必要なサービスのみを認可するようにポリシーを変更し、再びOUにポリシーを付ける。`, `B. 「AWS IAM > アクセスレポート > 組織の行動」で最近行われたアクセスの情報を確認します。長い間アクセスされていないサービスがあれば、それを組織のサービスコントロールポリシー(SCPs)から取り除く。`, `C. 「AWS IAM > ポリシー > アクセスアドバイザー」で、使用されていないサービスの「最終アクセス」情報を調べます。それらを組織のSCP認可リストから外す。`, `D. AWS CLIの「aws iam get-service-last-accessed-details」を使って、組織が持つIAMエンティティのサービスの最終アクセス情報を取得します。不必要なサービスはSCP認可リストから除く。`],
	multipleAnswers: false,
	correctAnswers: [`B. 「AWS IAM > アクセスレポート > 組織の行動」で最近行われたアクセスの情報を確認します。長い間アクセスされていないサービスがあれば、それを組織のサービスコントロールポリシー(SCPs)から取り除く。`],
	explanation: `答えはBです。 解説： 選択肢Aは間違っています。問題では、OUからポリシーを取り除くことは適切ではありません。全てのサービスと操作がデフォルトで暗黙的に拒否されているため、サービスに影響を及ぼします。 選択肢Bが正解です。「AWS IAM > アクセスレポート > 組織の行動」は、最近のアクセス情報を提供します。SCPで許可されていても利用されていないサービスをすぐに特定できます。 選択肢Cは間違っています。IAMポリシーの「Access Advisor」は、AWS組織全体の概要を提供しません。個々のIAMエンティティの「Access Advisor」の調査結果をまとめる必要があります。「AWS IAM > アクセスレポート > 組織の行動」を使用するのが正しい手段です。 選択肢Dは間違っています。「aws iam get-service-last-accessed-details」はIAMエンティティ（例：ユーザー、ユーザーグループ、役割、ポリシー）が最終的にAWSリソースにアクセスするために使用した詳細が含まれたレポートの生成しか可能としません。全体のAWS組織が必要とするサービスを特定することはできません。 参考リンク：https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor-view-data-orgs.html`,
	subQuestions: [{
		id: 3201,
		question: `AWSの「FullAWSAccess」SCPのデフォルト設定を無効にした場合、どのような挙動になるでしょうか？`,
		options: [`全てのAWSサービスの行動が暗黙的に許可される`, `全てのAWSサービスの行動が明示的に拒否される`, `全てのAWSサービスの行動が暗黙的に拒否される`, `全てのAWSサービスの行動が明示的に許可される`],
		multipleAnswers: false,
		correctAnswers: [`全てのAWSサービスの行動が暗黙的に拒否される`],
		explanation: `AWSのService Control Policies (SCP)では、「FullAWSAccess」SCPのデフォルト設定を無効にすることで、全てのAWSサービスの行動が暗黙的に拒否されます。何らかの行動を許可するためには、明示的に認可を行う必要があります。`
	}, {
		id: 3202,
		question: `最近行われたAWSサービスのアクセス情報を確認するためにはどこを見ると良いでしょうか？`,
		options: [`AWS IAM > ポリシー > アクセスアドバイザー`, `AWS IAM > アクセスレポート > 組織の行動`, `AWS IAM > ポリシー > ポリシー一覧`, `AWS CLI > aws iam get-service-last-accessed-details`],
		multipleAnswers: false,
		correctAnswers: [`AWS IAM > アクセスレポート > 組織の行動`],
		explanation: `AWS IAM > アクセスレポート > 組織の行動」は、最近のアクセス情報を提供します。これにより、アクセスされていないサービスをすぐに特定することができます。`
	}, {
		id: 3203,
		question: `AWS IAM > ポリシー > アクセスアドバイザーの情報から何が得られますか？`,
		options: [`AWS組織全体のサービスアクセスの概要`, `個々のIAMエンティティのサービスアクセスの概要`, `全てのIAMエンティティのサービスアクセスの詳細`, `最近行われたサービスアクセスの詳細情報`],
		multipleAnswers: false,
		correctAnswers: [`個々のIAMエンティティのサービスアクセスの概要`],
		explanation: `Access Advisorは、IAMエンティティ（ユーザー、グループ、ロールなど）が使用しているAWSサービスの情報を表示します。これにより、未使用あるいは必要としないサービスへのアクセスを制限することができます。`
	}, {
		id: 3204,
		question: `AWS CLIの「aws iam get-service-last-accessed-details」コマンドの主な使用目的は何ですか？`,
		options: [`AWS全体の最終アクセス詳細情報を表示する`, `特定のIAMエンティティの最終アクセス詳細情報を表示する`, `特定のAWSサービスの最終アクセス詳細情報を表示する`, `特定のIAMポリシーの最終アクセス詳細情報を表示する`],
		multipleAnswers: false,
		correctAnswers: [`特定のIAMエンティティの最終アクセス詳細情報を表示する`],
		explanation: `aws iam get-service-last-accessed-details」コマンドは、AWS CLIを使用して、IAMエンティティが最後に何を使用し、その詳細を取得するために使用します。これにより、IAMエンティティが最終的に何をアクセスしたか、その詳細を確認することができます。`
	}, {
		id: 3205,
		question: `AWS 組織内で SCP が適用され、全てのアクセスが暗黙的に拒否されている状態では、OU からポリシーを取り外した場合、どのような影響がありますか？`,
		options: [`影響は無い`, `全てのサービスに影響が及ぶ`, `取り外されたポリシーに関連するサービスに影響を及ぼす`, `OU のポリシーが取り外されたため OU に影響が及ぶ`],
		multipleAnswers: false,
		correctAnswers: [`全てのサービスに影響が及ぶ`],
		explanation: `全てのアクセスが暗黙的に拒否されているSCPが適用されている場合、OUからポリシーを取り外すと、全てのAWSサービスと操作に影響を与えます。これは取り扱いに注意を要する設定です。`
	}]
}, {
	id: 33,
	question: `あなたは大手企業のAWSエンジニアとして務めています。 各KMSカスタマーマネージドキーに、キーがどのタスクに割り当てられているかを示す「タスク」タグが設定されており、属性ベースのアクセス制御(ABAC)戦略を使用して、タグ付きのKMSカスタマーマネージドキーへのアクセスを調整する予定です。 KMSキーの一部には、「タスク」=「アルファ」タグが設定されています。「kms:Encrypt」および「kms:Decrypt」操作のみを、これらのKMSキーに対すr許可を与えるIAMポリシーを作成します。以下のIAMポリシーのどれが正しいですか？`,
	options: [`{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "kms:ResourceAliases": "Task/Alpha" } } } ] }`, `{ "Version": "2012-10-17", "Statement": [ { "Effect": "Deny", "Action": [ "kms:Encrypt", "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*" }, { "Sid": "IAMPolicyWithResourceTagAllow", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "aws:ResourceTag/Task": "Alpha" } } } ] }`, `{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Deny", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringNotEquals": { "kms:ResourceAliases": "Task/Alpha" } } } ] }`, `{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "aws:ResourceTag/Task": "Alpha" } } } ] }`],
	multipleAnswers: false,
	correctAnswers: [`{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "aws:ResourceTag/Task": "Alpha" } } } ] }`],
	explanation: `選択肢Aの「kms:ResourceAliases」はKMSエイリアスの条件キーであり、KMSタグの条件キーではないため間違いです。AWS KMSでABAC戦略を実装する場合、タグとエイリアスの両方を利用できますが、本問ではタグ条件キー「aws:ResourceTag」を使うべきです。 選択肢Bのポリシーは、「Deny」ステートメントが「Allow」ステートメントを上書きしてしまうため間違いです。このポリシーを利用すると、「Task」="Alpha"タグを持つKMSキーに対してIAMプリンシパルが処理を行うことができません。 選択肢Cのポリシーは、「Task」="Alpha"エイリアスのないKMSキーの使用を拒否しますが、「許可」許可は提供されていないため、「Task」タグを持つKMSキーにはアクセスが許可されません。 選択肢Dのポリシーは、「Task」="Alpha"タグに対する適切な条件を持つため、正解です。このポリシーは、「Task」="Alpha"タグが付けられている条件でKMSキーの使用を許可します。`,
	subQuestions: [{
		id: 33,
		question: `あなたは大手企業のAWSエンジニアとして務めています。 各KMSカスタマーマネージドキーに、キーがどのタスクに割り当てられているかを示す「タスク」タグが設定されており、属性ベースのアクセス制御(ABAC)戦略を使用して、タグ付きのKMSカスタマーマネージドキーへのアクセスを調整する予定です。 KMSキーの一部には、「タスク」=「アルファ」タグが設定されています。「kms:Encrypt」および「kms:Decrypt」操作のみを、これらのKMSキーに対すr許可を与えるIAMポリシーを作成します。以下のIAMポリシーのどれが正しいですか？`,
		options: [`{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "kms:ResourceAliases": "Task/Alpha" } } } ] }`, `{ "Version": "2012-10-17", "Statement": [ { "Effect": "Deny", "Action": [ "kms:Encrypt", "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*" }, { "Sid": "IAMPolicyWithResourceTagAllow", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "aws:ResourceTag/Task": "Alpha" } } } ] }`, `{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Deny", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringNotEquals": { "kms:ResourceAliases": "Task/Alpha" } } } ] }`, `{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "aws:ResourceTag/Task": "Alpha" } } } ] }`],
		multipleAnswers: false,
		correctAnswers: [`{ "Version": "2012-10-17", "Statement": [ { "Sid": "IAMPolicyWithResourceTag", "Effect": "Allow", "Action": [ "kms:Encrypt", "kms:Decrypt" ], "Resource": "arn:aws:kms:ap-east-1:xxxxxxxxxxxx:key/*", "Condition": { "StringEquals": { "aws:ResourceTag/Task": "Alpha" } } } ] }`],
		explanation: `選択肢Aの「kms:ResourceAliases」はKMSエイリアスの条件キーであり、KMSタグの条件キーではないため間違いです。AWS KMSでABAC戦略を実装する場合、タグとエイリアスの両方を利用できますが、本問ではタグ条件キー「aws:ResourceTag」を使うべきです。 選択肢Bのポリシーは、「Deny」ステートメントが「Allow」ステートメントを上書きしてしまうため間違いです。このポリシーを利用すると、「Task」="Alpha"タグを持つKMSキーに対してIAMプリンシパルが処理を行うことができません。 選択肢Cのポリシーは、「Task」="Alpha"エイリアスのないKMSキーの使用を拒否しますが、「許可」許可は提供されていないため、「Task」タグを持つKMSキーにはアクセスが許可されません。 選択肢Dのポリシーは、「Task」="Alpha"タグに対する適切な条件を持つため、正解です。このポリシーは、「Task」="Alpha"タグが付けられている条件でKMSキーの使用を許可します。`
	}]
}, {
	id: 34,
	question: `あなたの組織は、従業員の身元確認のために自社で管理しているMicrosoft Active Directory（AD）を所有しています。現在の計画は、AWS IAM Identityセンター（AWS Single Sign-Onの後継）を活用し、AWSアクセスポータルにおけるAWSアカウントとクラウドアプリケーションへのSSOアクセスを管理することです。さらに、AWSが情報をキャッシュすることなく、ディレクトリに対する要求を自社で管理しているADにリダイレクトすることを希望しています。これを設定する適切な方法は何でしょうか？`,
	options: [`A. AWS Directory ServiceでActive Directory（AD）コネクタを作成し、ディレクトリに対する要求を転送するためのディレクトリゲートウェイとして利用します。IAM IdentityセンターをADコネクタを通じて自社で管理しているActive Directoryに接続します。`, `B. AWS Managed Microsoft ADを作り、自己管理されたディレクトリとAWS Microsoft ADの間に双方向の信頼関係をAWS IAM Identityセンターで確立します。`, `C. AWS IAM Identityセンターで、AWS Microsoft ADと自己管理されたディレクトリの間に一方向の信頼関係を作り、ディレクトリの要求をリダイレクトします。`, `D. 「AWS Identityセンター > 設定 > アイデンティティソース > アイデンティティソースの変更」で、自己管理したディレクトリを選び、これをIAM Identityセンターに連携します。`],
	multipleAnswers: false,
	correctAnswers: [`A. AWS Directory ServiceでActive Directory（AD）コネクタを作成し、ディレクトリに対する要求を転送するためのディレクトリゲートウェイとして利用します。IAM IdentityセンターをADコネクタを通じて自社で管理しているActive Directoryに接続します。`],
	explanation: `選択肢Aが適切です。AD Connectorはディレクトリゲートウェイとして機能し、ディレクトリ要求をリダイレクトする能力があります。自己管理されたADは、この手法を通じてIAM Identityセンターに繋ぐことができます。 選択肢Bは適切ではありません。問題の要求は、情報をキャッシュすることなくディレクトリ要求をリダイレクトする方法を要求しています。この選択肢はAWS Managed Microsoft ADを利用しており、これらの要求を満たしていません。 選択肢Cは適切ではありません。AWS Managed Microsoft ADと自己管理されたAD間の信頼関係は一方向ではなく、双方向でなければなりません。 選択肢Dは適切ではありません。「AWS Identityセンター > 設定 > アイデンティティソース > アイデンティティソースの変更」から直接自己管理されたディレクトリを追加することはできません。代わりに、IAM Identityセンターのコンソールを通じて、ユーザーがAWS Managed Microsoft ADをIAM identityセンターに追加することは可能です。`,
	subQuestions: [{
		id: 1,
		question: `AWS Directory Serviceの「AD コネクタ」の機能について、正しいものはどれですか？`,
		options: [`AD Connectorは自己管理されたActive Directory環境とAWS環境との間をつなぐ役割を果たす`, `AD Connectorはディレクトリの要求をディレクトリゲートウェイとしてリダイレクトする`, `AD Connectorは情報をキャッシュする機能がある`, `AD ConnectorはAWS IAM Identityセンターに直接連携できる`],
		multipleAnswers: false,
		correctAnswers: [`AD Connectorはディレクトリの要求をディレクトリゲートウェイとしてリダイレクトする`],
		explanation: `AD Connectorは、自己管理されたActive Directoryの要求をリダイレクティング（転送）する機能があります。これをディレクトリゲートウェイと呼びます。`
	}, {
		id: 2,
		question: `AWS Managed Microsoft ADを利用する目的にはどのようなものがありますか？`,
		options: [`AWSと自社のディレクトリとの間に一方向の信頼関係を作成する`, `AWSと自社のディレクトリとの間に双方向の信頼関係を作成する`, `ディレクトリの要求をリダイレクトする`, `情報をキャッシュすることなくディレクトリ要求をリダイレクトする`],
		multipleAnswers: false,
		correctAnswers: [`AWSと自社のディレクトリとの間に双方向の信頼関係を作成する`],
		explanation: `AWS Managed Microsoft ADの主な目的の一つは、AWS環境と自己管理されたディレクトリとの間に信頼関係を確立することです。それは一般的に双方向の信頼関係で構築されます。`
	}, {
		id: 3,
		question: `AWS IAM Identityセンターから自己管理されたディレクトリを直接追加することは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `AWS IAM Identityセンターから自己管理されたディレクトリを直接追加することはできません。しかし、ユーザーがAWS Managed Microsoft ADをIAM identityセンターに追加することは可能です。`
	}, {
		id: 4,
		question: `AWS IAM Identityセンターはどのような目的で使用されますか？`,
		options: [`AWSアカウントとクラウドアプリケーションへのSSOアクセスを管理する`, `AWSのデータストレージを確保する`, `AWS内のサーバを管理する`, `AWSのネットワーク構成を管理する`],
		multipleAnswers: false,
		correctAnswers: [`AWSアカウントとクラウドアプリケーションへのSSOアクセスを管理する`],
		explanation: `AWS IAM Identityセンターは、AWSアカウントとクラウドアプリケーションへのシングルサインオン(SSO)アクセスを管理する目的で使用されます。`
	}, {
		id: 5,
		question: `IAM Identityセンターの後継とされるのはどれですか？`,
		options: [`AWS Single Sign-On`, `AWS Managed Microsoft AD`, `AWS Directory Service`, `AWS Security Token Service（STS）`],
		multipleAnswers: false,
		correctAnswers: [`AWS Single Sign-On`],
		explanation: `AWS Single Sign-Onは、IAM Identityセンターの後継サービスとされています。`
	}]
}, {
	id: 35,
	question: `あなたはクラウドエンジニアであり、いくつかの組織単位（OUs）が含まれるAWS Organizationを運営しています。AWS環境でガバナンスを向上させるために、AWS Organization全体や特定の組織単位にAWSリソースを作成する必要があります。具体的には、全組織でAWS Configのルールを設定することを検討しています。さらに要求として、リソースが選択した複数のリージョンに配置されることが求められています。リソースはAWS CloudFormationを使用して作成することを予定しています。次の提案のうち、もっとも適切なのはどれでしょうか？`,
	options: [`A. CloudFormation StackSetsを自己管理の権限で作成します。デプロイメントオプションの設定ページで、スタックセットをデプロイしたいアカウントとリージョンを設定します。`, `B. サービス管理の権限でCloudFormation StackSetsを作成します。「団体全体にデプロイ」または「組織単位にデプロイ」をデプロイオプションに設定します。スタックインスタンスをデプロイしたいリージョンを選択します。`, `C. CloudFormationのテンプレートに、AWSのアカウントとリージョンをCloudFormationのパラメータとして追加します。 AWS Organizationの管理者アカウントからCloudFormationスタックを起動します。`, `D. AWS Organizationの管理者アカウントで、CloudFormationスタックに基づくリソースグループを作成します。全体の組織またはOUでリソースグループを共有します。`],
	multipleAnswers: false,
	correctAnswers: [`B. サービス管理の権限でCloudFormation StackSetsを作成します。「団体全体にデプロイ」または「組織単位にデプロイ」をデプロイオプションに設定します。スタックインスタンスをデプロイしたいリージョンを選択します。`],
	explanation: `選択肢Aは間違いです。CloudFormation StackSetの自己管理の権限では、特定のAWSアカウントとリージョンを手動で選択する必要があります。それに対し、CloudFormation StackSetsのサービス管理の権限を通じて設定すると、OrganizationまたはOUの全てのアカウントへスタックセットを自動でデプロイできます。そのため、選択肢Bの手法が選択肢Aよりも優れています。 選択肢Bは正しいです。CloudFormation StackSetのサービス管理の権限を用いると、AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックをデプロイすることができます。 選択肢Cは間違いです。アカウントとリージョンをCloudFormationパラメータに追加しても、AWS Organization全体のアカウントでCloudFormationスタックを容易に起動または管理することはできません。 選択肢Dは間違いです。リソースグループを使用してAWSリソースを整理することは可能ですが、AWS Organization全体でリソースグループを共有することはできません。したがって、この選択肢は要求を満たせません。`,
	subQuestions: [{
		id: 1,
		question: `AWS CloudFormation StackSetsでは自己管理の権限を用いると、どのような操作が必要になるでしょうか？`,
		options: [`特定のAWSアカウントとリージョンを手動で選択する`, `AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックを自動デプロイする`, `AWS Organizations全体のアカウントでCloudFormationスタックを容易に起動または管理する`, `AWS Organization全体でリソースグループを共有する`],
		multipleAnswers: false,
		correctAnswers: [`特定のAWSアカウントとリージョンを手動で選択する`],
		explanation: `CloudFormation StackSetの自己管理の権限では、特定のAWSアカウントとリージョンを手動で選択する必要があります。それに対し、CloudFormation StackSetsのサービス管理の権限を通じて設定すると、OrganizationまたはOUの全てのアカウントへスタックセットを自動でデプロイできます。`
	}, {
		id: 2,
		question: `CloudFormation StackSetのサービス管理の権限を用いると、どのような操作が可能になるでしょうか？`,
		options: [`特定のAWSアカウントとリージョンを手動で選択する`, `AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックを自動デプロイする`, `AWS Organizations全体のアカウントでCloudFormationスタックを容易に起動または管理する`, `AWS Organization全体でリソースグループを共有する`],
		multipleAnswers: false,
		correctAnswers: [`AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックを自動デプロイする`],
		explanation: `CloudFormation StackSetのサービス管理の権限を用いると、AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックをデプロイすることができます。`
	}, {
		id: 3,
		question: `AWS Organizations全体のアカウントでCloudFormationスタックを容易に起動または管理することは可能でしょうか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `アカウントとリージョンをCloudFormationパラメータに追加しても、AWS Organization全体のアカウントでCloudFormationスタックを容易に起動または管理することはできません。`
	}, {
		id: 4,
		question: `AWS Organization全体でリソースグループを共有することは可能でしょうか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `リソースグループを使用してAWSリソースを整理することは可能ですが、AWS Organization全体でリソースグループを共有することはできません。`
	}, {
		id: 5,
		question: `AWS OrganizationsとCloudFormation StackSetsの組み合わせで最も適切な運用方法は何でしょうか？`,
		options: [`自己管理の権限でCloudFormation StackSetsを作成し、特定のAWSアカウントとリージョンを手動で選択する`, `サービス管理の権限でCloudFormation StackSetsを作成し、AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックを自動デプロイする`, `CloudFormationのパラメータにAWSのアカウントとリージョンを追加し、AWS Organizationの管理者アカウントからCloudFormationスタックを起動する`, `AWS Organizationの管理者アカウントでリソースグループを作成し、全体の組織またはOUでリソースグループを共有する`],
		multipleAnswers: false,
		correctAnswers: [`サービス管理の権限でCloudFormation StackSetsを作成し、AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックを自動デプロイする`],
		explanation: `サービス管理の権限でCloudFormation StackSetsを作成し、AWS Organizationsが管理する全てのアカウントに対して特定のリージョンでスタックをデプロイすることが最も適切な運用方法です。`
	}]
}, {
	id: 36,
	question: `事業拡大に伴い、企業のAWS組織がたくさんの組織単位（OU）とAWSアカウントで洗練されてきた。事業再編が数回行われ、それに伴い新しいAWSアカウントが生成される一方で、過去のAWSアカウントが停止されることもある。AWS管理者として、AWS組織内の全てのAWSアカウントの管理を担当しているあなたに対し、上司からはアカウントID、メールアドレス、ステータス等の、各AWSアカウントの詳細情報を提供するよう要請が入ってきた。これを効率良く実現する最良の方法は何でしょうか？`,
	options: [`イ. IAMユーザーとしてAWS Organizationsコンソールにログインし、「操作」から「アカウントリストをエクスポート」を選択し、組織のアカウント情報をCSVファイルとしてダウンロードする。`, `ロ. rootユーザーとしてAWS Organizationsコンソールにログインし、「操作」から「アカウントリストをエクスポート」を選択し、組織のアカウント情報をtxtファイルとしてエクスポートする。`, `ハ. 組織のrootユーザーとしてAWS IAMコンソールにログインし、「資格情報レポート」を選択し、信頼情報レポートをCSVファイルとしてダウンロードする。`, `ニ. 組織のrootユーザーとしてAWS IAMコンソールにログインし、「組織活動」を選択し、全てのAWSアカウント情報を表示する。`],
	multipleAnswers: false,
	correctAnswers: [`イ. IAMユーザーとしてAWS Organizationsコンソールにログインし、「操作」から「アカウントリストをエクスポート」を選択し、組織のアカウント情報をCSVファイルとしてダウンロードする。`],
	explanation: `正解はイです。 「アカウントリストをエクスポート」オプションはAWS Organizationコンソールに存在し、これを使用すれば、効率よくアカウント情報をCSV形式でダウンロードすることができます。必要なアカウントの詳細全てがCSVファイルに含まれています。 ロは誤りです。セキュリティ上の理由から、組織のrootアカウントを使用するのは推奨されません。rootアカウントは全てのAWSサービスに対してフルアクセス権を持つため、リスクが高いのです。上述のシナリオでは、rootでないIAMユーザーの使用がより適切です。 ハは誤りです。「資格情報レポート」オプションはAWS IAMコンソールに存在しますが、これはAWS アカウントのIAMの信頼性情報に関する詳細のみを提供します。組織全体のアカウントの詳細までは含まれていません。 ニも誤りです。「組織活動」オプションは組織の構造のみを提供し、各アカウントの詳細を含んでいません。`,
	subQuestions: [{
		id: 1,
		question: `AWSで全てのサービスに対してフルアクセス権を持つアカウントは何ですか？`,
		options: [`IAMユーザーアカウント`, `rootユーザーアカウント`, `ゲストアカウント`, `AWS Organizations アカウント`],
		multipleAnswers: false,
		correctAnswers: [`rootユーザーアカウント`],
		explanation: `rootユーザーアカウントは、AWSアカウントを作成する際に作られます。rootユーザーは、AWSサービスに対する完全なアクセス権を持ちます。`
	}, {
		id: 2,
		question: `どの組織ではAWSのアカウント情報をエクスポートすることが出来ますか？`,
		options: [`IAM`, `AWS Management Console`, `AWS Organizations`, `EC2`],
		multipleAnswers: false,
		correctAnswers: [`AWS Organizations`],
		explanation: `AWS Organizationsを利用すると、自社のAWSアカウント群を一元管理できる。そのため、AWS Organizationsではアカウント情報をエクスポートすることが可能。`
	}, {
		id: 3,
		question: `AWS Organizationコンソールの「アカウントリストをエクスポート」オプションの出力ファイル形式は何ですか？`,
		options: [`txt`, `csv`, `xml`, `json`],
		multipleAnswers: false,
		correctAnswers: [`csv`],
		explanation: `「アカウントリストをエクスポート」オプションを使用すれば、アカウント情報をCSV形式でダウンロードすることができます。`
	}, {
		id: 4,
		question: `AWS IAMコンソールの「資格情報レポート」オプションは、どの情報を提供しますか？`,
		options: [`AWSアカウントの信頼性情報`, `AWS全体のアカウントの詳細情報`, `IAMユーザーの詳細情報`, `AWS組織の詳細情報`],
		multipleAnswers: false,
		correctAnswers: [`AWSアカウントの信頼性情報`],
		explanation: `AWS IAMコンソールの「資格情報レポート」オプションは、AWSアカウントのIAMの信頼性情報に関する詳細のみを提供します。`
	}, {
		id: 5,
		question: `AWS IAMコンソールの「組織活動」オプションは、どの情報を提供しますか？`,
		options: [`組織の構造情報`, `組織のアカウントの詳細情報`, `組織のユーザーの詳細情報`, `組織の存続時間`],
		multipleAnswers: false,
		correctAnswers: [`組織の構造情報`],
		explanation: `AWS IAMコンソールの「組織活動」オプションは、主に組織の構造に関する情報を提供します。各アカウントの詳細等は含まれていません。`
	}]
}, {
	id: 37,
	question: `あなたの組織は新たにモバイルアプリケーションを開発中で、そのアプリケーションが一時的な認証情報を取得し、AWSリソースへアクセスするためにAmazon Cognito IDプールを利用する予定です。「強化された認証フロー」は、認証情報を取得する際のネットワークコールを簡素化するために選択されました。このアプリケーションは初めにサードパーティのIDプロバイダー（例えば、Facebook）でユーザーを認証し、そのIDトークンをAmazon Cognito IDプールのGetIDリクエストに提出し、IDとしてトークンを交換します。この認証フローに対して、どの選択肢が正確なのでしょうか？`,
	options: [`IDは、Amazon Cognito IDプールへのGetOpenIdTokenリクエストに用いられ、新たなOAuth 2.0トークンが返されます。これがAssumeRoleWithWebIdentityリクエストで用いられ、AWS APIの認証情報が取得されます。`, `IDは、Amazon Cognito IDプールへのGetOpenIdTokenForDeveloperIdentityリクエストに使われ、新たなOAuth 2.0トークンが返されます。これがAssumeRoleWithWebIdentityリクエストで用いられ、AWS APIの認証情報が取得されます。`, `IDは、Amazon Cognito IDプールへのGetCredentialsForIdentityリクエストに用いられます。そしてIDが正常に認証された際に、新たなOAuth 2.0トークンが返される。この新たなトークンがAssumeRoleWithWebIdentityリクエストで用いられ、CognitoからAWS APIの認証情報を取得します。`, `IDは、Amazon Cognito IDプールへのGetCredentialsForIdentityリクエストに用いられます。そしてIDが正常に認証された際に、AWS APIの認証情報を返します。`],
	multipleAnswers: false,
	correctAnswers: [`IDは、Amazon Cognito IDプールへのGetCredentialsForIdentityリクエストに用いられます。そしてIDが正常に認証された際に、AWS APIの認証情報を返します。`],
	explanation: `選択肢Dが正解です。 選択肢Aは、「強化された認証フロー」が資格情報取得を簡素化するために用いられているため、アプリはGetOpenIdTokenやAssumeRoleWithWebIdentityを直接送信する必要がなく、この選択肢は誤りです。 選択肢Bは、開発者認証付きIDプロバイダが用いられる場合にのみGetOpenIdTokenForDeveloperIdentityが用いられます。本シナリオではサードパーティのIDプロバイダが用いられているため、この選択肢は誤りです。 選択肢Cも誤りです。「強化された認証フロー」を用いているため、アプリケーションはAssumeRoleWithWebIdentityを送信する必要がありません。また、基本的な認証フローを用いる場合でも、AssumeRoleWithWebIdentityはAmazon CognitoではなくAWS STSに送信するべきです。`,
	subQuestions: [{
		id: 1,
		question: `Amazon Cognito IDプールはどのようにして一時的な認証情報を取得することができますか？`,
		options: [`Amazon Cognito IDプールへのGetOpenIdTokenリクエストを使用します。`, `Amazon Cognito IDプールへのGetOpenIdTokenForDeveloperIdentityリクエストを使用します。`, `Amazon Cognito IDプールへのGetCredentialsForIdentityリクエストを使用します。`, `Amazon Cognito IDプールへのAssumeRoleWithWebIdentityリクエストを使用します。`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Cognito IDプールへのGetCredentialsForIdentityリクエストを使用します。`],
		explanation: `Amazon Cognito IDプールは一時的な認証情報を提供するためにGetCredentialsForIdentity操作を使用します。これは、IDトークンをCognito IDプールに送信し、認証情報を取得するためのリクエストです。`
	}, {
		id: 2,
		question: `強化された認証フローはどのような利点がありますか？`,
		options: [`ユーザーのデバイス上で認証情報を保存する必要がない。`, `ユーザーのデバイスが直接AWSリソースにアクセスすることが可能になる。`, `認証情報の取得プロセスが簡素化される。`, `認証情報の有効期限が延長される。`],
		multipleAnswers: false,
		correctAnswers: [`認証情報の取得プロセスが簡素化される。`],
		explanation: `強化された認証フローは、認証のプロセスを簡素化し、ネットワークコールの数を減らすことでパフォーマンスを改善します。`
	}, {
		id: 3,
		question: `AssumeRoleWithWebIdentityリクエストはどこに送信されますか？`,
		options: [`Amazon Cognito`, `AWS STS`, `Facebook`, `Amazon Cognito IDプール`],
		multipleAnswers: false,
		correctAnswers: [`AWS STS`],
		explanation: `AssumeRoleWithWebIdentityはAWS STS（Security Token Service）に対して送信され、一時的なセキュリティ認証情報を得るために使用されます。`
	}, {
		id: 4,
		question: `GetOpenIdTokenForDeveloperIdentityリクエストはどのような場合に使用されますか？`,
		options: [`サードパーティのIDプロバイダを使用している場合`, `開発者が独自に管理する認証システムを使用している場合`, `OAuth 2.0トークンを取得する必要がある場合`, `Amazon Cognitoユーザープールを使用している場合`],
		multipleAnswers: false,
		correctAnswers: [`開発者が独自に管理する認証システムを使用している場合`],
		explanation: `GetOpenIdTokenForDeveloperIdentityリクエストは、開発者が独自に管理する認証システムを使用して、ユーザーにAmazon Cognito IDを関連付けるために使用されます。`
	}, {
		id: 5,
		question: `モバイルアプリケーションが一時的な認証情報を取得するために、最初に何をしなければならないですか？`,
		options: [`サードパーティのIDプロバイダ（例えば、Facebook）でユーザーを認証します。`, `Amazon Cognito IDプールへのGetCredentialsForIdentityリクエストを送信します。`, `AWS STSへのAssumeRoleWithWebIdentityリクエストを送信します。`, `独自の認証システムでユーザーを認証します。`],
		multipleAnswers: false,
		correctAnswers: [`サードパーティのIDプロバイダ（例えば、Facebook）でユーザーを認証します。`],
		explanation: `ユーザーが一時的な認証情報を取得する前に、ユーザーはサードパーティのIDプロバイダ（例えば、Facebook）で認証する必要があります。その後、認証トークンはAmazon Cognito IDプールへ送信され、新たなIDと交換されます。`
	}]
}, {
	id: 38,
	question: `あるチームが新たなアプリケーションを構築しています。Amazon API Gatewayを利用してREST APIが設定され、Lambda関数がバックエンドとして働いています。REST APIの運用と設定をシンプルにするため、Lambda関数の代理統合を使い、API GatewayのREST APIを再デプロイせずにLambda関数をどんな時でも修正できるよう計画しています。何種類のメソッドも、HTTPリクエスト全体がそのままLambda関数に送られるべきです。以下の設定オプションのうち、Lambda代理統合について正しいものはどれでしょうか？`,
	options: [`REST APIで「ANY」メソッドを設定し、「Lambda Proxy integrationを使用」を選択し、「Lambda Function」フィールドでバックエンドLambdaを指定します。`, `REST APIで、DELETE、GET、HEAD、OPTIONS、PATCH、POST、PUTを含む各HTTPタイプのHTTPメソッドを設定し、「Lambda Proxy integrationを使用」をクリックし、「Lambda Function」フィールドにバックエンドLambdaを入力します。`, `REST APIで「ANY」メソッドを設定し、Method ExecutionペインでMethod Requestを選択し、HTTP Request Headersセクションに要求されたHTTPヘッダーを追加します。`, `REST APIで、DELETE、GET、HEAD、OPTIONS、PATCH、POST、PUTを含む各HTTPタイプのHTTPメソッドを設定し、HTTPメソッドのIntegration Requestを選択し、Content Handlingを「Passthrough」に設定します。`],
	multipleAnswers: false,
	correctAnswers: [`REST APIで「ANY」メソッドを設定し、「Lambda Proxy integrationを使用」を選択し、「Lambda Function」フィールドでバックエンドLambdaを指定します。`],
	explanation: `正解は選択肢Aです。「ANY」メソッドを使用することで、全てのサポートしているHTTPメソッドに対して1つのAPIメソッド設定を使用できます。以下に、Lambdaプロキシ統合を有効化する例を示します。選択肢Bは不正解です。全HTTPメソッドを表す汎用の「ANY」メソッドを使用すべきで、Lambdaプロキシ統合の設定下で各HTTPメソッドを設定する必要はありません。選択肢Cは不正解です。「Lambda Proxy integrationを使用」オプションが有効化されておらず、REST APIはLambda非プロキシ統合で設定されています。選択肢Dは不正解です。「Lambda Proxy integrationを使用」オプションが有効化されておらず、また、「Passthrough」のContent Handlingはリクエストボディの処理方法のみを決定します。Lambdaプロキシ統合を設定するのに適切な場所ではありません。`,
	subQuestions: [{
		id: 1,
		question: `Amazon API Gatewayを用いた設定の一つである「ANY」メソッドの機能とは何か？`,
		options: [`全てのサポートしているHTTPメソッドに対して1つのAPIメソッド設定を使用する`, `全てのHTTPメソッドを制限する`, `GETメソッドだけを許可する`, `POSTメソッドだけを許可する`],
		multipleAnswers: false,
		correctAnswers: [`全てのサポートしているHTTPメソッドに対して1つのAPIメソッド設定を使用する`],
		explanation: `「ANY」メソッドを使用することで、全てのサポートしているHTTPメソッドに対して1つのAPIメソッド設定を使用できます。これは全てのHTTPメソッドで共通の設定を用いる場合に便利な機能です。`
	}, {
		id: 2,
		question: `Lambdaのプロキシ統合と非プロキシ統合の違いは何ですか？`,
		options: [`プロキシ統合はHTTPリクエスト全体をLambda関数に送るのに対し、非プロキシ統合はHTTPリクエスト全体を送らない`, `プロキシ統合はLambda関数を複数設定できるのに対し、非プロキシ統合は1つのLambda関数しか設定できない`, `プロキシ統合はHTTPリクエスト全体をLambda関数に送らないのに対し、非プロキシ統合はHTTPリクエスト全体を送る`, `プロキシ統合は1つのLambda関数しか設定できないのに対し、非プロキシ統合はLambda関数を複数設定できる`],
		multipleAnswers: false,
		correctAnswers: [`プロキシ統合はHTTPリクエスト全体をLambda関数に送るのに対し、非プロキシ統合はHTTPリクエスト全体を送らない`],
		explanation: `プロキシ統合はHTTPリクエスト全体（HTTP情報含む）をLambda関数に送ります。一方、非プロキシ統合ではパスパラメーター、クエリパラメーター、ヘッダーなどを個別にマッピングし、それらの情報をLambda関数に送信します。`
	}, {
		id: 3,
		question: `Content Handlingの「Passthrough」オプションの役割とは何ですか？`,
		options: [`リクエストボディの処理方法を決定する`, `レスポンスヘッダーの処理方法を決定する`, `リクエストヘッダーの処理方法を決定する`, `エラーハンドリングの処理方法を決定する`],
		multipleAnswers: false,
		correctAnswers: [`リクエストボディの処理方法を決定する`],
		explanation: `Content Handlingの「Passthrough」オプションはリクエストボディの処理方法を決定します。Lambdaプロキシ統合を設定するのに適切な場所ではありません。`
	}, {
		id: 4,
		question: `Lambdaの代理統合とは何ですか？`,
		options: [`API Gatewayで利用するプロキシサーバの設定を行うこと`, `API GatewayからのリクエストをLambda関数に転送すること`, `API Gatewayからのリクエストを他のAPIに転送すること`, `API GatewayからのリクエストをDBに直接送信すること`],
		multipleAnswers: false,
		correctAnswers: [`API GatewayからのリクエストをLambda関数に転送すること`],
		explanation: `Lambdaの代理統合はAPI GatewayからのリクエストをLambda関数に転送する機能です。これにより、開発者はAPI Gatewayの設定から解放され、Lambda関数のコードだけに集中することができます。`
	}, {
		id: 5,
		question: `Amazon API GatewayのREST APIを再デプロイせずにLambda関数を修正するための設定は何ですか？`,
		options: [`AWS Lambda layersの使用`, `AWS Lambda versioningの使用`, `Lambda代理統合の使用`, `API Gateway cachingの使用`],
		multipleAnswers: false,
		correctAnswers: [`Lambda代理統合の使用`],
		explanation: `Lambda代理統合を使用すると、API GatewayのREST APIを再デプロイすることなく、バックエンドのLambda関数を修正できます。これはAPIの更新を高速化し、運用を簡素化します。`
	}]
}, {
	id: 39,
	question: `あなたはAWSのソリューションアーキテクトとして働いています。あなたの会社では、Amazon Linux EC2インスタンス上に設置されたウェブサイトを運営しています。業務要件により、同じインスタンス上で別のウェブサイトをホストすることを求められており、それぞれの証明書をエラスティックネットワークインターフェース（ENI）に関連付けて、1台のサーバー上で複数のSSL証明書を使用する必要性に直面しています。新しく加えるエラスティックネットワークインターフェースは、現在のENIとは異なるサブネットに設置することが求められています。この要件に対する適切なEC2インスタンスのセットアップ方法は何でしょうか？`,
	options: [`違うサブネットに新しくエラスティックネットワークインターフェースを作成します。AWS CLIのrun-instancesコマンドを利用して、このネットワークインターフェースを--secondary-private-ip-addressesオプションと一緒に接続します。`, `新たなエラスティックネットワークインターフェースを設立します。そして、インスタンスを停止します。「AWS EC2コンソール > ネットワーク設定 > 高度なネットワーク設定 > 二次IP > 手動割り当て」を通じて、このネットワークインターフェースを接続します。その後、インスタンスを再起動します。`, `別のサブネットに新しいエラスティックネットワークインターフェースを作ります。「AWS EC2コンソール > アクション > ネットワーキング > ネットワークインターフェースのアタッチ」を通じて、このネットワークインターフェースを接続します。`, `EC2インスタンスにおいて、異なるサブネットに二次ENIを設定することはできません。あるEC2インスタンスにつながる全てのエラスティックネットワークインターフェースは、同じサブネット内に存在すべきです。`],
	multipleAnswers: false,
	correctAnswers: [`別のサブネットに新しいエラスティックネットワークインターフェースを作ります。「AWS EC2コンソール > アクション > ネットワーキング > ネットワークインターフェースのアタッチ」を通じて、このネットワークインターフェースを接続します。`],
	explanation: `選択肢Aは誤りです。AWS CLIのrun-instancesコマンドと--secondary-private-ip-addressesオプションは、二次的なプライベートIPを割り当てるために使用されますが、二次ENIを接続するためには使用されません。 選択肢Bは間違いです。ENIを接続する際にインスタンスを停止し再開する必要はありません。「二次IP」オプションは二次IPではなく二次ENIを接続するために使用されます。 選択肢Cは正解です。これはユーザーが「AWS EC2コンソール > アクション > ネットワーキング > ネットワークインターフェースのアタッチ」を通じてENIを接続することができるからです。 選択肢Dは誤りです。ユーザーはEC2インスタンスにおいて異なるサブネットに二次ENIを設定することが可能です。ただし、全てのネットワークインターフェースは同一のアベイラビリティーゾーンのインスタンスに接続されることが必要です。`,
	subQuestions: [{
		id: 1,
		question: `AWS CLIのrun-instancesコマンドと--secondary-private-ip-addressesオプションは何に使用されますか？`,
		options: [`二次的なプライベートIPを割り当てる`, `エラスティックネットワークインターフェースを接続する`, `新たなエラスティックネットワークインターフェースを設立する`, `二次のエラスティックネットワークインターフェースを割り当てる`],
		multipleAnswers: false,
		correctAnswers: [`二次的なプライベートIPを割り当てる`],
		explanation: `AWS CLIのrun-instancesコマンドと--secondary-private-ip-addressesオプションは、二次的なプライベートIPを割り当てるために使用されます。これらは二次ENIを接続するためには使用されません。`
	}, {
		id: 2,
		question: `ENIを接続する際、インスタンスを停止して再起動する必要はありますか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `ENIを接続する際にインスタンスを停止して再起動する必要はありません。ただし、変更が有効になるためには、一旦接続を切断することが必要な場合がしばしばあります。`
	}, {
		id: 3,
		question: `EC2インスタンスにおいて、異なるサブネットに二次ENIを設定することは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`はい`],
		explanation: `ユーザーはEC2インスタンスにおいて異なるサブネットに二次ENIを設定することが可能です。ただし、全てのネットワークインターフェースは同一のアベイラビリティーゾーンのインスタンスに接続されることが必要です。`
	}, {
		id: 4,
		question: `どの手順を使ってエラスティックネットワークインターフェースを接続することが可能ですか？`,
		options: [`AWS EC2コンソール > アクション > ネットワーキング > ネットワークインターフェースのアタッチ`, `AWS EC2コンソール > ネットワーク設定 > 高度なネットワーク設定 > 二次IP > 手動割り当て`, `AWS CLIのrun-instancesコマンドと一緒に、このネットワークインターフェースを--secondary-private-ip-addressesオプションで接続`, `上記のどれも正しくない`],
		multipleAnswers: false,
		correctAnswers: [`AWS EC2コンソール > アクション > ネットワーキング > ネットワークインターフェースのアタッチ`],
		explanation: `ユーザーは「AWS EC2コンソール > アクション > ネットワーキング > ネットワークインターフェースのアタッチ」を通じてENIを接続することができます。`
	}, {
		id: 5,
		question: `あるEC2インスタンスにつながる全てのエラスティックネットワークインターフェースは、どの条件を満たすべきですか？`,
		options: [`全てのネットワークインターフェースは同じサブネット内に存在すべきです。`, `全てのネットワークインターフェースは同一のリージョン内に存在すべきです。`, `全てのネットワークインターフェースは異なるサブネット内に存在すべきです。`, `全てのネットワークインターフェースは同一のアベイラビリティーゾーンのインスタンスに接続されることが必要です。`],
		multipleAnswers: false,
		correctAnswers: [`全てのネットワークインターフェースは同一のアベイラビリティーゾーンのインスタンスに接続されることが必要です。`],
		explanation: `全てのネットワークインターフェースは、同一のアベイラビリティーゾーンのインスタンスに接続されることが必要です。これは、ネットワーク間の通信を改善し、ネットワークパフォーマンスを向上させるために必要な条件です。`
	}]
}, {
	id: 40,
	question: `あなたはスタートアップ企業のAWSの環境を運営していて、その企業にはいくつかの組織単位（OU）があります。その一つは「DevOps_OU」と名付けられ、開発と運用チームのAWSアカウントが含まれています。最近、新たにセキュリティチームが結成され、あなたは「SecOps_OU」と名付けた新しい組織単位を作成しました。あることからDevOps_OUにある一部のAWSアカウントを新しく構築されたSecOps_OUに移す必要があります。これを最も効率的な方法で実施するために何をすべきですか？`,
	options: [`AWS組織の管理コンソールにログインし、DevOps_OU内の指定したAWSアカウントをピックアップします。アクションメニューで「組織から削除」を選択します。それらのアカウントを再度呼び出して、SecOps_OUに追加します。`, `AWS組織の管理コンソールにログインし、DevOps_OU内の該当AWSアカウントを選択します。アクションメニューで「移動」を選択し、SecOps_OUを選択して「AWSアカウントの移動」をクリックします。`, `AWS組織の管理コンソールにログインし、DevOps_OU内の関連AWSアカウントを選択します。アクションメニューで「組織から削除」を選択し、新たなAWSアカウントを作成後、SecOps_OUに追加します。`, `AWS組織の管理コンソールにログインし、DevOps_OUを選択し、それからルートへとAWSアカウントを移動します。次にSecOps_OUを選択し、ルートからSecOps_OUへとAWSアカウントを移動します。`],
	multipleAnswers: false,
	correctAnswers: [`AWS組織の管理コンソールにログインし、DevOps_OU内の該当AWSアカウントを選択します。アクションメニューで「移動」を選択し、SecOps_OUを選択して「AWSアカウントの移動」をクリックします。`],
	explanation: `選択肢Aは不正確です。AWSアカウントを組織から削除したり再招待する必要性はありません。それらは一つのOUから別のOUに直接移動することが可能です。選択肢Bが正解です。あなたはAWSアカウントを選択し、AWS組織の管理コンソール上で別のOUへと移動することができます。これが最も効率的なアプローチとなります。選択肢Cは間違っています。なぜなら、新たなAWSアカウントを作成する必要はなく、既存のAWSアカウントを直接OU間で移動することができます。選択肢Dも間違っています。なぜなら、AWSアカウントを一旦組織のルートに移動する必要がないからです。そのためこのオプションは不適当です。`,
	subQuestions: [{
		id: 1,
		question: `AWSの組織単位（OU）について正しい説明は何ですか？`,
		options: [`OUはAWSの独立した地理的領域を指す`, `OUはAWSアカウントのグループを指す`, `OUはAWSのデータセンターを指す`, `OUはAWSの物理的なサーバーを指す`],
		multipleAnswers: false,
		correctAnswers: [`OUはAWSアカウントのグループを指す`],
		explanation: `AWSの組織単位（OU）はAWSアカウントのグループを指します。これらのアカウントは、同じポリシーを共有し、同じ方法で管理されます。`
	}, {
		id: 2,
		question: `AWS組織の管理コンソールで可能なアクションは何ですか？`,
		options: [`アカウントを組織から削除する`, `アカウントを組織に追加する`, `アカウントを一つのOUから別のOUに移動する`, `すべての上記`],
		multipleAnswers: false,
		correctAnswers: [`すべての上記`],
		explanation: `AWS組織の管理コンソールでは、アカウントを組織から削除する、アカウントを組織に追加する、アカウントを一つのOUから別のOUに移動するなどのアクションを行うことができます。`
	}, {
		id: 3,
		question: `AWSアカウントの移動を効率的に行うための最適な方法は何ですか？`,
		options: [`アカウントを組織から削除し、再招待する`, `新たなAWSアカウントを作成し、OUに追加する`, `アカウントを一旦組織のルートに移動する`, `アカウントを直接別のOUに移動する`],
		multipleAnswers: false,
		correctAnswers: [`アカウントを直接別のOUに移動する`],
		explanation: `AWSアカウントの移動を効率的に行うための最適な方法は、アカウントを直接別のOUに移動することです。アカウントを組織から削除したり、新たなAWSアカウントを作成したり、アカウントを一旦組織のルートに移動したりする必要はありません。`
	}, {
		id: 4,
		question: `SecOps_OUとDevOps_OU間でAWSアカウントを移動するために必要な手順は何ですか？`,
		options: [`DevOps_OUからアカウントを削除し、SecOps_OUに追加する`, `DevOps_OUを削除し、SecOps_OUに追加する`, `DevOps_OUのアカウントを選択し、SecOps_OUに移動する`, `SecOps_OUのアカウントを選択し、DevOps_OUに移動する`],
		multipleAnswers: false,
		correctAnswers: [`DevOps_OUのアカウントを選択し、SecOps_OUに移動する`],
		explanation: `SecOps_OUとDevOps_OU間でAWSアカウントを移動するためには、DevOps_OUのアカウントを選択し、SecOps_OUに移動するのが正しい手順です。`
	}, {
		id: 5,
		question: `AWS組織の「移動」操作が正常に行われたら、どのような結果が期待されますか？`,
		options: [`移動前と移動後でAWSアカウントの設定がリセットされる`, `AWSアカウントは移動前と移動後で同じ設定を持つ`, `移動先のOUに応じてAWSアカウントの設定が自動的に更新される`, `AWSアカウントは移動後に新たな設定を入力する必要がある`],
		multipleAnswers: false,
		correctAnswers: [`AWSアカウントは移動前と移動後で同じ設定を持つ`],
		explanation: `AWS組織の「移動」操作が正常に行われた場合、AWSアカウントは移動前と移動後で同じ設定を持つことが期待されます。つまり、設定がリセットされたり、自動的に更新されたり、新たな設定を入力する必要があるわけではありません。`
	}]
}, {
	id: 41,
	question: `あなたの会社は、新規のウェブアプリケーションの開発を進めています。これはコンテナベースのアプリケーションで、その手軽さからAWS ECS Fargateで運用する計画です。さらに、アプリケーションは状態の永続化のためにファイルシステムに依存しており、シンプルかつスケーラブルなElastic File System(EFS)ボリュームの使用が求められています。既にAmazon ECSクラスタとEFSファイルシステムの作成は完了しています。ECS Fargate上でAmazon EFSファイルシステムを無事にマウントするために、以下の要件のうちどれを満たすべきですか？（2つ選んでください）`,
	options: [`EFSファイルシステムのセキュリティグループは、ECS Fargateのタスクやサービスから2049ポートへの入り口接続を許可することが必要です。`, `ECS Fargateタスクのセキュリティグループは、EFSファイルシステムのセキュリティグループから2049ポートへの入り口接続を許可することが必要です。`, `EFSファイルシステムのセキュリティグループは、ECS Fargateサービスへの80/443ポートを通じた出口接続を許可することが必要です。`, `EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは一緒のアベイラビリティゾーン内に存在することが必要です。`, `EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは一緒のVPC内に存在することが必要です。`],
	multipleAnswers: true,
	correctAnswers: [`EFSファイルシステムのセキュリティグループは、ECS Fargateのタスクやサービスから2049ポートへの入り口接続を許可することが必要です。`, `EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは一緒のVPC内に存在することが必要です。`],
	explanation: `選択肢Aが正解となります。その理由はEFSファイルシステムが2049ポートを入り口通信に利用するため、EFSファイルシステムのセキュリティグループがECS Fargateからの進入トラフィックを許可していなければならないからです。 選択肢Bは不正解です。理由は、ECS Fargateタスクのセキュリティグループが許可すべきなのは、2049ポートを通じた入り口トラフィックではなく出口トラフィックであるからです。 選択肢Cは不正解です。理由は、EFSファイルシステムのセキュリティグループは、ECSサービスへの出口通信を実施する必要がないからです。従って、この選択肢は不要です。 選択肢Dは不正解です。その理由は、EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは、ECS Fargate上のEFSを無事にマウントするための要件としては、高い可用性を持つために複数のアベイラビリティゾーンに配置する必要があるからです。この選択肢は誤りです。 選択肢Eが正解となります。その理由は、Amazon EFSファイルシステムによると、Amazon ECSクラスタとFargateタスクは全て同じVPC内に存在していなければならないと明記されているからです。`,
	subQuestions: [{
		id: 1,
		question: `EFSファイルシステムのセキュリティグループは、どのポートへの入り口接続を許可することが必要ですか？`,
		options: [`80ポート`, `443ポート`, `2049ポート`, `すべてのポート`],
		multipleAnswers: false,
		correctAnswers: [`2049ポート`],
		explanation: `EFSファイルシステムは2049ポートを入り口通信に利用するため、EFSファイルシステムのセキュリティグループがECS Fargateからの進入トラフィックを許可していなければならない。`
	}, {
		id: 2,
		question: `ECS Fargateタスクのセキュリティグループは、どのポートへの出口接続を許可することが必要ですか？`,
		options: [`80ポート`, `443ポート`, `2049ポート`, `すべてのポート`],
		multipleAnswers: false,
		correctAnswers: [`2049ポート`],
		explanation: `ECS Fargateタスクのセキュリティグループが許可すべきなのは、2049ポートを通じた出口トラフィックである。`
	}, {
		id: 3,
		question: `EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは何に存在することが必要ですか？`,
		options: [`一緒のアベイラビリティゾーン内`, `一緒のVPC内`, `別々のVPC内`, `別々のアベイラビリティゾーン内`],
		multipleAnswers: false,
		correctAnswers: [`一緒のVPC内`],
		explanation: `Amazon EFSファイルシステムによると、Amazon ECSクラスタとFargateタスクは全て同じVPC内に存在していなければならない。`
	}, {
		id: 4,
		question: `EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは何に配置する必要がありますか？`,
		options: [`一緒のアベイラビリティゾーン内`, `一緒のVPC内`, `別々のVPC内`, `別々のアベイラビリティゾーン内`],
		multipleAnswers: false,
		correctAnswers: [`別々のアベイラビリティゾーン内`],
		explanation: `EFSファイルシステム、Amazon ECSクラスタ、そしてFargateタスクは、ECS Fargate上のEFSを無事にマウントするための要件としては、高い可用性を持つために複数のアベイラビリティゾーンに配置する必要がある。`
	}, {
		id: 5,
		question: `EFSファイルシステムのセキュリティグループは、ECS Fargateサービスへのどのポートを通じた出口接続を許可することが必要ですか？`,
		options: [`80ポート`, `443ポート`, `2049ポート`, `いずれのポートも許可する必要はない`],
		multipleAnswers: false,
		correctAnswers: [`いずれのポートも許可する必要はない`],
		explanation: `EFSファイルシステムのセキュリティグループは、ECSサービスへの出口通信を実施する必要がない。`
	}]
}, {
	id: 42,
	question: `API Gateway APIを用いて"GET /product?product={name}"メソッドを公開し、Lambda関数を呼び出しています。このメソッドには「product」というクエリーパラメータが含まれています。次に示すようなLambda関数は、「Hello, {name}」という応答を返します: exports.handler = function(event, context, callback) { var res ={ "statusCode": 200, "headers": { "Content-Type": "*/*" } }; if (event.product==null) { callback(new Error('Missing the required product parameter.')); } else { res.body = "Hello, " + event.product +"!"; callback(null, res); } }; APIメソッドのためのLambdaの統合を正しく設定するにはどのようにすればよいでしょうか？`,
	options: [`AWS CLI「aws apigateway put-integration-response」を使用してLambdaプロキシ統合を設定します。Lambda関数のJSONペイロード内のproductプロパティへのproductクエリストリングパラメータのマッピングを設定します。`, `AWS CLI「aws apigateway put-method」を使用してLambdaカスタム統合を設定します。Lambda関数のイベントプロパティへのproductクエリストリングパラメータのマッピングを設定します。`, `AWS CLI「aws apigateway put-integration」を使用してLambdaプロキシ統合を設定します。テンプレートファイルを用いてLambda関数のイベントプロパティへのproductクエリストリングパラメータのマッピングを設定します。`, `AWS CLI「aws apigateway put-integration」を使用してLambdaカスタム統合を設定します。Lambda関数のJSONペイロードのproductプロパティへのproductクエリストリングパラメータのマッピングを設定します。`],
	multipleAnswers: false,
	correctAnswers: [`AWS CLI「aws apigateway put-integration」を使用してLambdaカスタム統合を設定します。Lambda関数のJSONペイロードのproductプロパティへのproductクエリストリングパラメータのマッピングを設定します。`],
	explanation: `正解：D 選択肢Aは誤っています。AWS CLI「aws apigateway put-integration-response」は、バックエンドから返されたレスポンスをクライアントに渡す設定を行うために使用されます。着信リクエストデータが統合リクエストにマッピングされる設定を行うためには使用できません。 選択肢Bは誤っています。AWS CLI「aws apigateway put-method」はAPI Gatewayリソースにメソッドを追加するために使用されます。Lambdaカスタム統合を設定するために使用するものではありません。 選択肢Cは誤っています。Lambdaプロキシ統合では、API Gatewayはそのままの生のリクエストをLambda関数に渡します。プロキシ統合ではプロパティマッピングを設定することはできません。 選択肢Dが正確です。AWS CLI「aws apigateway put-integration」を使うと、Lambdaカスタム統合が設定でき、productクエリストリングパラメータをJSONペイロードのproductプロパティにマッピングすることができます。`,
	subQuestions: [{
		id: 1,
		question: `AWS CLIの「aws apigateway put-integration-response」コマンドはどのような役割を果たしますか？`,
		options: [`バックエンドから返されたレスポンスをクライアントに渡す設定を行う`, `API Gatewayリソースにメソッドを追加する`, `Lambdaカスタム統合を設定する`, `Lambdaプロキシ統合を設定する`],
		multipleAnswers: false,
		correctAnswers: [`バックエンドから返されたレスポンスをクライアントに渡す設定を行う`],
		explanation: `AWS CLIの「aws apigateway put-integration-response」コマンドは、バックエンドからの返答をクライアントに取り回す設定を行うために使います。`
	}, {
		id: 2,
		question: `AWS CLIの「aws apigateway put-method」コマンドはどのような役割を果たしますか？`,
		options: [`API Gatewayリソースにメソッドを追加する`, `Lambdaプロキシ統合を設定する`, `Lambdaカスタム統合を設定する`, `バックエンドからのレスポンスをクライアントに取り回す設定を行う`],
		multipleAnswers: false,
		correctAnswers: [`API Gatewayリソースにメソッドを追加する`],
		explanation: `AWS CLIの「aws apigateway put-method」コマンドは、API Gatewayリソースにメソッドを追加するために使います。`
	}, {
		id: 3,
		question: `Lambdaプロキシ統合の特性は何ですか？`,
		options: [`API Gatewayはそのままの生のリクエストをLambda関数に渡す`, `API GatewayはリクエストをJSONペイロードに変換してLambda関数に渡す`, `API Gatewayはリクエストの一部を調整した上でLambda関数に渡す`, `API Gatewayはリクエストに応じてレスポンスを作成してLambda関数に渡す`],
		multipleAnswers: false,
		correctAnswers: [`API Gatewayはそのままの生のリクエストをLambda関数に渡す`],
		explanation: `Lambdaプロキシ統合では、API Gatewayは着信リクエストをそのままの形式でLambda関数に渡します。プロパティマッピングを設定することはできません。`
	}, {
		id: 4,
		question: `AWS CLIの「aws apigateway put-integration」コマンドとLambdaカスタム統合を組み合わせた際の特性は何ですか？`,
		options: [`着信リクエストデータのプロパティマッピングを設定できる`, `着信リクエストデータとレスポンスデータのマッピングを設定できる`, `リクエストデータを一部編集し、Lambda関数に渡すことができる`, `生のリクエストデータをLambda関数に渡すことができる`],
		multipleAnswers: false,
		correctAnswers: [`着信リクエストデータのプロパティマッピングを設定できる`],
		explanation: `AWS CLIの「aws apigateway put-integration」コマンドとLambdaカスタム統合を組み合わせると、着信リクエストデータをプロパティマッピングして、それをLambda関数に渡す設定を行うことができます。`
	}, {
		id: 5,
		question: `クエリストリングパラメータをLambda関数のJSONペイロードのプロパティへマッピングするにはどの方法を使用しますか？`,
		options: [`Lambdaプロキシ統合`, `Lambdaカスタム統合と「aws apigateway put-integration」`, `Lambdaカスタム統合と「aws apigateway put-method」`, `Lambdaプロキシ統合と「aws apigateway put-integration-response」`],
		multipleAnswers: false,
		correctAnswers: [`Lambdaカスタム統合と「aws apigateway put-integration」`],
		explanation: `Lambdaカスタム統合を「aws apigateway put-integration」コマンドと組み合わせると、クエリストリングパラメータをLambda関数のJSONペイロードのプロパティへマッピングすることが可能です。`
	}]
}, {
	id: 43,
	question: `あなたはある企業のAWSソリューションアーキテクトです。企業は一部のリージョンでAWSリソースを配備し、複数のVPCやサブネットを保有しています。さらに、企業は自社のオンプレミスでアプリケーションを開発し、管理するためにAWSの開発環境を持つことを望んでいます。自身のネットワーク上でサブネットを設定し、その中のAWSの計算インスタンスがAWSリージョン内の同一VPCの他のインスタンスと通信できるようにしたいと考えています。この目的を達成するために、あなたはどのようにしてソリューションを設計しますか？`,
	options: [`オンプレミスでアプリケーションを作動させるためにAWSローカルゾーンを設定し、そこをDirect ConnectでAWSの特定のリージョンに接続します。ローカルゾーンにサブネットを設定し、その中でオンプレミスのAWSリソースを稼働させます。`, `オンプレミスでアプリケーションを動作させるためにAWSローカルゾーンを構成、それをVPN接続でAWSの特定リージョンに接続します。新たにVPCとサブネットをローカルゾーン内に作成し、ローカルゾーンのVPCとAWSのVPCの間でVPCピアリング接続を樹立します。`, `オンプレミスでアプリケーションを稼働させるためにAWSアウトポストを設置、それをDirect Connectで特定のAWSリージョンに接続します。アウトポストにサブネットを設け、その中でオンプレミスのAWSリソースを動作させます。`, `オンプレミスでアプリケーションを稼働させるためにAWSアウトポストを設置、それをVPN接続で特定のAWSリージョンに接続します。アウトポストに新たにVPCとサブネットを構築し、アウトポストのVPCとAWSのVPCの間でVPCピアリング接続を樹立します。`],
	multipleAnswers: false,
	correctAnswers: [`オンプレミスでアプリケーションを稼働させるためにAWSアウトポストを設置、それをDirect Connectで特定のAWSリージョンに接続します。アウトポストにサブネットを設け、その中でオンプレミスのAWSリソースを動作させます。`],
	explanation: `選択肢AとBは不正解です。AWSローカルゾーンはユーザーへの近接性を目的としたAWSリージョンの拡張であり、オンプレミスリソースへの利用には適していません。逆に、選択肢Cは正解です。AWSアウトポストはオンプレミスにAWSリソースを展開するために使用されます。AWS VPCはアウトポストに拡張可能であり、アウトポスト内のサブネットでは、AWSリージョン内のインスタンスと通信することが可能です。選択肢Dは不正解です。このケースでは、Direct ConnectやVPN接続を通じてアウトポストをAWS特定リージョンに接続することが可能です。しかし、アウトポストとAWSリージョン間で同じVPCを使用するため、新たにVPCやVPCピアリング接続を設定する必要はありません。`,
	subQuestions: [{
		id: 1,
		question: `AWSのオンプレミスインフラストラクチャでAWSリソースを動作させる方法を選択してください。`,
		options: [`AWSローカルゾーンを設定`, `AWSアウトポストを設置`, `AWS Direct Connectを利用`, `VPN接続を設定`],
		multipleAnswers: false,
		correctAnswers: [`AWSアウトポストを設置`],
		explanation: `AWSアウトポストは、オンプレミスでAWSリソースを稼働させるために使用されます。`
	}, {
		id: 2,
		question: `オンプレミスのAWSリソースとAWSリージョン間の通信方法を選択してください。`,
		options: [`AWSローカルゾーンを使用`, `Direct Connectを使用`, `VPN接続を使用`, `VPCピアリング接続を使用`],
		multipleAnswers: false,
		correctAnswers: [`Direct Connectを使用`],
		explanation: `AWS Direct ConnectはオンプレミスのAWSリソースとAWSリージョン間の通信に使用します。`
	}, {
		id: 3,
		question: `あるAWSリソースがAWSリージョン内の同一VPCの他のインスタンスと通信するために、どのような設定が必要でしょうか？`,
		options: [`AWSローカルゾーンでサブネットを設定`, `AWSアウトポストでサブネットを設定`, `新たにVPCとサブネットを作成`, `VPCピアリング接続を樹立`],
		multipleAnswers: false,
		correctAnswers: [`AWSアウトポストでサブネットを設定`],
		explanation: `AWSアウトポスト内のサブネットでAWSリソースを稼働させることで、AWSリージョン内の同一VPCの他のインスタンスと通信できます。`
	}, {
		id: 4,
		question: `AWSローカルゾーンとAWSのリージョンとの主な違いは何でしょうか？`,
		options: [`AWSローカルゾーンはリージョンの拡張で、ユーザーに近接するために使用される`, `AWSローカルゾーンはオンプレミスリソースの使用に最適`, `AWSローカルゾーンは専用のネットワーク接続を必要とする`, `AWSローカルゾーンは複数のリージョン間で通信を可能にする`],
		multipleAnswers: false,
		correctAnswers: [`AWSローカルゾーンはリージョンの拡張で、ユーザーに近接するために使用される`],
		explanation: `AWSローカルゾーンは、ユーザーへの近接性を目的としたAWSリージョンの拡張であり、オンプレミスリソースへの利用には適していません。`
	}, {
		id: 5,
		question: `AWSのどの機能がAWS VPCをオンプレミスに拡張できるでしょうか？`,
		options: [`AWS Direct Connect`, `AWSアウトポスト`, `AWSローカルゾーン`, `VPCピアリング`],
		multipleAnswers: false,
		correctAnswers: [`AWSアウトポスト`],
		explanation: `AWSアウトポストは、オンプレミスにAWS VPCを拡張できます。`
	}]
}, {
	id: 44,
	question: `あなたは金融業界でAWSの専門家として働いています。開発部署では、実行中に複数のシステム設定を読み取るウェブアプリケーションを開発しています。これらの設定は、KMSのユーザー管理キーを使用して暗号化され、AWSシステムマネージャのパラメータストアでSecureStringとして（us-east-1）に保管されています。本番環境のAWSアカウントに保存されている全ての設定は、「prod」のプレフィックスが付いています。現在、ウェブアプリケーションが本番環境の設定を正常に読み取るために、IAMポリシーを作成する必要があります。以下のIAMポリシーのうち、最も適切なものはどれでしょうか？`,
	options: [`A. { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "arn:aws:ssm:us-east-", "Effect": "Allow", "Action": [ "arn:aws:kms:us-east- "Effect": "Allow", "Action": [ "arn:aws:ssm:us-east- "ssm:GetParameters" ], "Resource": [ ] }, { 1:xxxxxxxxxxxx:parameter/prod-*" "Resource": [ ], "kms:Decrypt" ], "Resource": [ "arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID" ]`, `B. { "Version": "2012-10-17", "Statement": [ "ssm:GetParameter" ], } { 1:xxxxxxxxxxxx:parameter/prod-*" "kms:Decrypt", "kms:Encrypt", "arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID" ] { "Action": [ "Resource": [ "kms:GenerateDataKey" ], "Effect": "Allow", ] }, "Resource": "arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*" } ] `, `C. { "Version": "2012-10-17", "Effect": "Allow", "Action": [ "ssm:GetParameter", "arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*" ], "Resource": [ 1:xxxxxxxxxxxx:key/key-EXAMPLE-ID" ] "Effect": "Allow", "Action": [ "arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID", "kms:Decrypt" ], "Resource": [ ] }`, `D. { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "arn:aws:ssm:us-east-1:xxxxxxxxxxxx:parameter/prod-*", "ssm:GetParameter*" ], "Resource": [ ] }, "Effect": "Allow", "Action": [ "arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID", "kms:Decrypt" ], "Resource": [ ] }`],
	multipleAnswers: false,
	correctAnswers: [`A. { "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "arn:aws:ssm:us-east-", "Effect": "Allow", "Action": [ "arn:aws:kms:us-east- "Effect": "Allow", "Action": [ "arn:aws:ssm:us-east- "ssm:GetParameters" ], "Resource": [ ] }, { 1:xxxxxxxxxxxx:parameter/prod-*" "Resource": [ ], "kms:Decrypt" ], "Resource": [ "arn:aws:kms:us-east-1:xxxxxxxxxxxx:key/key-EXAMPLE-ID" ]`],
	explanation: `オプションAは正解です。本番環境の設定に対する「ssm:GetParameters」操作と、KMSキーに対する「kms:Decrypt」操作を許可するこのポリシーは、他の不必要な権限を付与しないため、最小権限原則に従っています。選択肢Bは不正解です。KMSで暗号化されたSecureString設定の読み取りには、'kms:Decrypt'操作だけが必要で、'kms:Encrypt'や'kms:GenerateDataKey'の許可は必要ありません。 選択肢Cは不正解です。問題文は本番環境の設定の読み取りに必要なIAMポリシーについて問題にしています。したがって、'ssm:PutParameter'、'ssm:DeleteParameter'、'ssm:DeleteParameters'の操作は必要ありません。 選択肢Dは不正解です。全ての設定に関する'ssm:GetParameter'操作が許可されていません。参照資料: https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore- access.html`,
	subQuestions: [{
		id: 1,
		question: `AWSシステムマネージャのパラメータストアを使用する主な利点は何ですか？`,
		options: [`全てのパラメータが自動的に暗号化される`, `パラメータをAWSリソース間で共有することができる`, `KMSキーを使用してパラメータを暗号化することができる`, `すべてのパラメータは自動的に公開される`],
		multipleAnswers: false,
		correctAnswers: [`パラメータをAWSリソース間で共有することができる`],
		explanation: `AWSシステムマネージャのパラメータストアは、AWSリソース間で設定データをストアおよび共有するサービスであり、セキュアストリングを使用してデータを暗号化することもできます。ただし、全てのパラメータが自動的に暗号化されるわけではありませんし、自動的に公開されるわけでもありません。`
	}, {
		id: 2,
		question: `IAMポリシーの最小権限原則とは何ですか？`,
		options: [`ユーザーにはすべての権限を付与し、必要に応じて削除する`, `最初はユーザーに全く権限を付与せず、必要に応じて追加する`, `ユーザーには最初から全ての権限を付与し、業務に関係ない権限を削除する`, `ユーザーが真に必要とする最小限の権限だけを付与し、必要に応じて追加あるいは減少させる`],
		multipleAnswers: false,
		correctAnswers: [`ユーザーが真に必要とする最小限の権限だけを付与し、必要に応じて追加あるいは減少させる`],
		explanation: `IAMポリシーの最小権限原則とは、ユーザーが任務の遂行に真に必要とする最小限の権限を与えるという原則のことを指します。これにより、一部のユーザーが許可されていないリソースにアクセスするリスクが軽減されます。`
	}, {
		id: 3,
		question: `KMSキーを使用した暗号化の目的は何ですか？`,
		options: [`可能な限り大量のデータを保存する`, `複数のAWSリソース間でデータを共有する`, `データを保護および制御する方法を提供する`, `AWSリソースがあるリージョンから別のリージョンに移動する場合に使用する`],
		multipleAnswers: false,
		correctAnswers: [`データを保護および制御する方法を提供する`],
		explanation: `AWS Key Management Service（AWS KMS）は、AWSリソースとアプリケーションで使用される暗号キーの作成と管理を制御するセキュリティサービスです。これにより、データを保護するためのキー管理および制御のメカニズムが提供されます。`
	}, {
		id: 4,
		question: `'kms:Decrypt'操作の目的は何ですか？`,
		options: [`KMSキーを使用してデータを暗号化する`, `KMSキーを使用してデータを複合化する`, `新しいKMSキーを生成する`, `特定のKMSキーを削除する`],
		multipleAnswers: false,
		correctAnswers: [`KMSキーを使用してデータを複合化する`],
		explanation: `'kms:Decrypt'操作は、特定のKMSキーを使用してデータを複合化するために使用されます。この操作は、AWS KMS内で暗号化されたデータを読み取るために必要となります。`
	}, {
		id: 5,
		question: `AWSのIAMポリシーは、どのような情報を示していますか？`,
		options: [`IAMユーザーがどのAWSサービスにアクセスできるか`, `IAMユーザーのアカウント情報`, `AWSアカウントの料金情報`, `AWSサービスのリージョン情報`],
		multipleAnswers: false,
		correctAnswers: [`IAMユーザーがどのAWSサービスにアクセスできるか`],
		explanation: `IAMポリシーは、特定のユーザーがどのAWSサービスに対してどのようなアクションを取ることが可能かという情報を定義します。これにより、AWS内の権限管理が可能となります。`
	}]
}, {
	id: 48,
	question: `ある企業がAWS組織にサービスコントロールポリシー（SCP）を設定し、t2.micro以外のインスタンスタイプの立ち上げを制限しました。この組織は、本番環境と開発環境の2つのアカウントを持ち、それぞれが1つのOUから成り立っています。開発アカウントでは新たに開発されたアプリケーションのテストのために1ヶ月間、c5.xlargeインスタンスタイプを実行させる必要があります。テストが完了すると、開発アカウントは再びt2.microインスタンスのみを起動することになります。一方、本番環境アカウントは、常にt2.microインスタンスのみを起動しなければなりません。 この必要条件を満たすために、SCPに何の組み合わせの変更を加えることができますか？`,
	options: [`「開発」の新しいOUを作り、開発アカウントをこのOUに移動します。そして、c5.xlargeインスタンスタイプの立ち上げを許可する新たなSCPを作ること。ただし、ルートに付属している既存のSCPはそのままである。`, `「開発」の新しいOUを作り、開発アカウントをこのOUに移動します。そして、c5.xlargeインスタンスタイプの立ち上げを許可する新たなSCPを作成し、新しいOUに適用します。その上で、ルートの既存SCPを取り外し、そのSCPを本番環境アカウントが存在するOUに適用する。`, `組織のルートから既存のSCPを外し、c5.xlargeインスタンスタイプの立ち上げを許可する新たなSCPを適用する。それに続いて、テストフェーズが終わったら、これらのSCPをもとの状態に戻す。`, `c5.xlargeインスタンスタイプの起動を許可する新たなSCPを開発アカウントに適用します。この変更により、組織のルートに付属している現在のSCPは変更無しである。`],
	multipleAnswers: false,
	correctAnswers: [`「開発」の新しいOUを作り、開発アカウントをこのOUに移動します。そして、c5.xlargeインスタンスタイプの立ち上げを許可する新たなSCPを作成し、新しいOUに適用します。その上で、ルートの既存SCPを取り外し、そのSCPを本番環境アカウントが存在するOUに適用する。`],
	explanation: `SCPがOUレベルで設定されている場合、そのOUに含まれる全てのアカウントが影響を受けます。 OUやアカウントレベルで許可が否定されると、OUやアカウントレベルで明示的に「許可」を設定しても、それが有効に働きません。この問題では、ルートレベルのSCPはt2.micro以外のインスタンスの起動を否定しています。その結果、その許可はOUとそのOU内のプロダクションと開発の両方のアカウントに引き継がれます。開発のアカウントだけにc5.largeインスタンスタイプの起動を許可するためには、以下の操作を行うことができます： 1. 開発のアカウントを新しいOUに移動します。そしてそのOUに、c5.xlargeインスタンスタイプの起動を許可する新たなSCPを適用します。 2. ルートレベルからt2.micro以外のインスタンスタイプの起動を否定するSCPを取り除き、それをプロダクションアカウントがあるOUに適用します。 オプションAは正しくありません。ルートレベルのSCPがc5.xlargeインスタンスタイプの起動を否定していますので、OUレベルでc5.xlargeインスタンスタイプの起動を許可するSCPを適用しても許可されません。 オプションCは正しくありません。ルートレベルのSCPでc5.xlargeインスタンスタイプの起動を許可すると、プロダクションと開発の両方のアカウントに許可されることになります。 オプションDは正しくありません。ルートレベルのSCPがc5.xlargeインスタンスタイプの起動を否定していますので、アカウントレベルでc5.xlargeインスタンスタイプの起動を許可するSCPを適用しても許可されません。 AWS組織でSCPを適用する方法の詳細については、以下のリンクをご覧ください。 https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_attach.html`,
	subQuestions: [{
		id: 1,
		question: `AWSのサービスコントロールポリシー（SCP）は何を制御しますか？`,
		options: [`インスタンスの種類`, `サービスの使用`, `コストの制御`, `ユーザーの権限`],
		multipleAnswers: false,
		correctAnswers: [`サービスの使用`],
		explanation: `サービスコントロールポリシー（SCP）はAWS組織を使用するときに、組織内の各AWSアカウントで使用できるAWSサービスとアクションを制御します。`
	}, {
		id: 2,
		question: `AWS組織において、ルートレベルで許可を否定した場合、その下にあるOUやアカウントレベルで「許可」を設定しても有効にならない、これはなぜですか？`,
		options: [`許可は上位レベルから下位レベルへ継承されるため`, `許可は下位レベルから上位レベルへ継承されるため`, `許可はルートレベルでのみ設定できるため`, `許可はOUレベルでのみ設定できるため`],
		multipleAnswers: false,
		correctAnswers: [`許可は上位レベルから下位レベルへ継承されるため`],
		explanation: `AWS組織において、上位レベルでの許可状態は下位レベルに影響を及ぼします。ルートレベルで許可が否定された場合、その下にあるOUやアカウントレベルで許可を設定しても有効になりません。`
	}, {
		id: 3,
		question: `AWS組織における「OU」の意味は何ですか？`,
		options: [`オブジェクトユニット`, `オルガナイゼーショナルユニット`, `オペレーショナルユニット`, `オプショナルユニット`],
		multipleAnswers: false,
		correctAnswers: [`オルガナイゼーショナルユニット`],
		explanation: `AWS組織における「OU」は「Organizational Unit」の略称で、「オルガナイゼーショナルユニット」を意味します。OUはAWSアカウントを管理し、特定のポリシーを一元的に適用するための管理単位です。`
	}, {
		id: 4,
		question: `同じAWS組織内の複数のOUがある場合、それぞれのOUにはどのような設定が可能ですか？`,
		options: [`異なるサービスコントロールポリシー（SCP）の適用`, `異なるAWSリージョンの指定`, `異なる課金方法の設定`, `異なるユーザーの所属`],
		multipleAnswers: false,
		correctAnswers: [`異なるサービスコントロールポリシー（SCP）の適用`],
		explanation: `同じAWS組織内の複数のOUがある場合、それぞれのOUには異なるサービスコントロールポリシー（SCP）の適用が可能です。これにより、組織内の異なるOU（部門やプロジェクトなど）で利用できるサービスを個別に制御できます。`
	}, {
		id: 5,
		question: `ある企業がAWS組織にt2.micro以外のインスタンスタイプの立ち上げを制限したい場合、この制限は何に設定されますか？`,
		options: [`IAMポリシー`, `サービスコントロールポリシー（SCP）`, `セキュリティグループ`, `EC2キーペア`],
		multipleAnswers: false,
		correctAnswers: [`サービスコントロールポリシー（SCP）`],
		explanation: `AWS組織が使用できるAWSサービスとアクションの制御は、サービスコントロールポリシー（SCP）で設定します。この制限はSCPに設定され、該当するOUやアカウントでは指定された制限に準じた操作のみが可能となります。`
	}]
}, {
	id: 49,
	question: `ある大手電話サービス会社の開発チームは、低遅延が重要な要素である新しいモバイルアプリケーションを開発しています。このアプリケーションはIPv4アドレスによって展開され、会社の5Gサービス利用者に利用されます。またアプリケーションは、定期的にセキュリティアップデートを行うためにインターネットへのセキュアな接続を必要とし、アプリケーションデータはAmazon S3バケットに安全にレプリケーションする必要があります。これらの要件を満たす最適なソリューションはどれでしょうか?`,
	options: [`AWSのローカルゾーンにAmazon EC2インスタンスをデプロイします。インターネット接続のために、最寄りのリージョンのAmazon VPCに接続されたエグレス専用のインターネットゲートウェイにデフォルトルートを設定します。`, `AWSのWavelength zoneにAmazon EC2インスタンスをデプロイします。インターネット接続のために、Amazon VPCに設置されたNATゲートウェイへのデフォルトルートを作成します。`, `AWS OutpostにAmazon EC2インスタンスをデプロイします。インターネット接続のために、最も近いリージョンに設置されたAmazon VPCに接続されたNATゲートウェイへのデフォルトルートを作成します。`, `AWSのWavelength zoneにAmazon EC2インスタンスをデプロイします。インターネット接続のために、Wavelength zoneに接続されたキャリアゲートウェイへのデフォルトルートを作成します。`],
	multipleAnswers: false,
	correctAnswers: [`AWSのWavelength zoneにAmazon EC2インスタンスをデプロイします。インターネット接続のために、Wavelength zoneに接続されたキャリアゲートウェイへのデフォルトルートを作成します。`],
	explanation: `Wavelength Zoneは、AWSの計算とストレージのリソースを通信キャリアネットワークのエッジにデプロイすることを可能にします。これにより、アプリケーションから5Gデバイス、エンドユーザーまでの低遅延が実現します。Wavelengthゾーンは、AWSとの高帯域幅の安全な接続を持っているため、アプリケーションデータはAmazon S3バケットに安全にレプリケートできます。キャリアゲートウェイは、Wavelengthゾーンと通信キャリア、そして通信キャリアネットワーク上のデバイスとの間をつなぎます。キャリアゲートウェイは、通信キャリアネットワークからWavelengthゾーンへのインバウンドトラフィック、そして通信キャリアネットワーク及びインターネットへのアウトバウンドトラフィックを許可します。 オプションA、ローカルゾーンはAWSリージョンの延長で、リソースをユーザーに近い複数の場所にデプロイするのに最適です。しかし、通信キャリアの5Gネットワークエッジでアプリケーションをデプロイするのには適していません。 オプションB、Wavelengthゾーンでインターネットにアクセスするにはキャリアゲートウェイが必要で、NATゲートウェイではありません。 オプションC、AWS Outpostは顧客の場所でAWSサービスをデプロイすることを可能にしますが、通信の5Gネットワークからの低遅延を得るためには、アプリケーションはWavelengthゾーンで起動したAmazon EC2インスタンスにデプロイすべきで、AWS Outpostではないです。`,
	subQuestions: [{
		id: 1,
		question: `次のうち、AWSの計算とストレージのリソースを通信キャリアネットワークのエッジにデプロイできるAWSサービスはどれですか?`,
		options: [`AWS Wavelength`, `AWS Local Zone`, `AWS Outpost`, `AWS Snowball`],
		multipleAnswers: false,
		correctAnswers: [`AWS Wavelength`],
		explanation: `AWS Wavelengthは、AWSの計算とストレージリソースを通信キャリアネットワークのエッジに配備することを可能にします。これにより、アプリケーションから5Gデバイス、エンドユーザーまでの低遅延が実現します。`
	}, {
		id: 2,
		question: `AWS Wavelength Zoneでインターネットにアクセスするためには何が必要ですか?`,
		options: [`キャリアゲートウェイ`, `NATゲートウェイ`, `インターネットゲートウェイ`, `VPNゲートウェイ`],
		multipleAnswers: false,
		correctAnswers: [`キャリアゲートウェイ`],
		explanation: `キャリアゲートウェイは、Wavelengthゾーンと通信キャリア、そして通信キャリアネットワーク上のデバイスとの間をつなぎます。キャリアゲートウェイは、通信キャリアネットワークからWavelengthゾーンへのインバウンドトラフィック、そして通信キャリアネットワーク及びインターネットへのアウトバウンドトラフィックを許可します。`
	}, {
		id: 3,
		question: `AWSローカルゾーンはどのような用途に最適ですか?`,
		options: [`ユーザーに近い複数の場所にリソースをデプロイする`, `通信キャリアの5Gネットワークエッジでアプリケーションをデプロイする`, `顧客の場所でAWSサービスをデプロイする`, `大量のデータをAWSに転送する`],
		multipleAnswers: false,
		correctAnswers: [`ユーザーに近い複数の場所にリソースをデプロイする`],
		explanation: `ローカルゾーンはAWSリージョンの延長で、リソースをユーザーに近い複数の場所にデプロイするのに最適です。しかし、通信キャリアの5Gネットワークエッジでアプリケーションをデプロイするのには適していません。`
	}, {
		id: 4,
		question: `AWS Outpostの主な目的は何ですか?`,
		options: [`顧客の場所でAWSサービスをデプロイする`, `通信キャリアの5Gネットワークエッジでアプリケーションをデプロイする`, `音声コンテンツを文字データに変換する`, `アプリケーションの自動スケーリング`],
		multipleAnswers: false,
		correctAnswers: [`顧客の場所でAWSサービスをデプロイする`],
		explanation: `AWS Outpostは顧客の場所でAWSサービスをデプロイすることを可能にします。しかし、通信の5Gネットワークからの低遅延を得るためには、アプリケーションはWavelengthゾーンで起動したAmazon EC2インスタンスにデプロイすべきで、AWS Outpostではないです。`
	}, {
		id: 5,
		question: `AWS Wavelengthゾーンはどのような接続を利用しますか？`,
		options: [`低帯域幅の安全な接続`, `高帯域幅の安全な接続`, `限定的な公開接続`, `顧客独自の接続`],
		multipleAnswers: false,
		correctAnswers: [`高帯域幅の安全な接続`],
		explanation: `Wavelengthゾーンは、AWSとの高帯域幅の安全な接続を持っているため、アプリケーションデータはAmazon S3バケットに安全にレプリケートできます。`
	}]
}, {
	id: 54,
	question: `ネット小売業者がAmazon API GatewayとAWS Lambdaを活用して商品注文処理アプリの開発を行っています。AWS Step Functionsは、アプリケーションの各要素の間で整合性を保つために使用されています。アプリケーションの実行タスクには、決済処理のような長い実行時間を要する非冪等性タスクと、顧客への決済通知など、多数の冪等性タスクが含まれています。業者は、これらの要求に対応するために、スケーラブルでコスト効率が良い方式でAWS Step Functionsのワークフローを設計したいと考えています。これらの要件に対応するためには、ワークフローはどのように設計すべきでしょうか？`,
	options: [`非冪等タスクにはStandard workflowsを用い、冪等タスクにはAsynchronous Express workflowsを用いる。`, `非冪等タスクにはAsynchronous Express workflowsを用い、冪等タスクにはStandard workflowsを用いる。`, `非冪等タスクにはSynchronous Express workflowsを用い、冪等タスクにはStandard workflowsを用いる。`, `非冪等タスクにはAsynchronous Express workflowsを用い、冪等タスクにはSynchronous workflowsを用いる。`],
	multipleAnswers: false,
	correctAnswers: [`非冪等タスクにはStandard workflowsを用い、冪等タスクにはAsynchronous Express workflowsを用いる。`],
	explanation: `AWS Step Functionsでは、以下の3種類のワークフローが利用可能です。 1) Standard Workflows: 状態の遷移の数に基づく課金が行われ、一度だけのワークフローの実行が可能で長時間稼働するタスクに向いています。非冪等タスク、例えば決済処理やAmazon EMRクラスタの稼働開始などに適しています。 2) Synchronous Express Workflows: 実行時間5分以内のタスクに適しており、最大で一度だけのワークフローの実行が可能です。計算は実行回数、各実行時間、および各実行で消費されたメモリに基づいて行われます。完了するまで待機し、その後結果を返すため、並列タスクやエラー対応、マイクロサービスの運用管理に向いています。 3) Asynchronous Express Workflows: これも実行時間5分以内のタスクに適していますが、最低でも一度はワークフローの実行が保証されます。課金は実行回数、各実行の時間、および各実行で消費されたメモリに基づいています。これらのワークフローは完了するまで待たず、すぐに応答を返すため、通知の送信やリアルタイム応答が必要ないタスクに適しています。 このケースでは、長時間の非冪等タスクである決済処理にはStandard Workflowsを使用することが適しています。一方、短時間の冪等タスクである決済通知の送信にはAsynchronous Express workflowsが適しています。 選択肢B、C、Dは誤りです。非冪等タスクにはStandard Workflowsが適しており、Asynchronous workflowsまたはSynchronous workflowsは推奨されません。また冪等タスクにはStandard workflowsではなく、Asynchronous workflowsを使用することが推奨されています。 詳しくは以下のURLをご参照ください。 https://docs.aws.amazon.com/step-functions/latest/dg/concepts-express-synchronous.html https://docs.aws.amazon.com/step-functions/latest/dg/express-at-least-once- execution.html`,
	subQuestions: [{
		id: 1,
		question: `AWS Step Functionsでは、以下のうちどのワークフロータイプが一度だけのワークフローの実行が可能で長時間稼働するタスクに適していますか？`,
		options: [`Standard Workflows`, `Synchronous Express Workflows`, `Asynchronous Express Workflows`, `All of the above`],
		multipleAnswers: false,
		correctAnswers: [`Standard Workflows`],
		explanation: `AWS Step Functionsでは、Standard Workflowsにより一度だけのワークフローの実行が可能で長時間稼働するタスクに適しています。`
	}, {
		id: 2,
		question: `AWS Step Functionsでは、以下のうちどのワークフロータイプが実行時間5分以内のタスクに適していますか？`,
		options: [`Standard Workflows`, `Synchronous Express Workflows`, `Asynchronous Express Workflows`, `Both B and C`],
		multipleAnswers: false,
		correctAnswers: [`Both B and C`],
		explanation: `AWS Step Functionsでは、Synchronous Express WorkflowsおよびAsynchronous Express Workflowsが実行時間5分以内のタスクに適しています。`
	}, {
		id: 3,
		question: `非冪等性タスク、例えば決済処理などに適しているAWS Step Functionsのワークフロータイプは何ですか？`,
		options: [`Standard Workflows`, `Synchronous Express Workflows`, `Asynchronous Express Workflows`, `None of the above`],
		multipleAnswers: false,
		correctAnswers: [`Standard Workflows`],
		explanation: `AWS Step Functionsでは、非冪等タスク、例えば決済処理などにはStandard Workflowsが適しています。`
	}, {
		id: 4,
		question: `実行時間5分以内のタスクで、最低でも一度はワークフローの実行が保証されるAWS Step Functionsのワークフロータイプは何ですか？`,
		options: [`Standard Workflows`, `Synchronous Express Workflows`, `Asynchronous Express Workflows`, `None of the above`],
		multipleAnswers: false,
		correctAnswers: [`Asynchronous Express Workflows`],
		explanation: `AWS Step Functionsでは、実行時間5分以内のタスクで、最低でも一度はワークフローの実行が保証されるワークフロータイプとしてAsynchronous Express Workflowsがあります。`
	}, {
		id: 5,
		question: `通知の送信やリアルタイム応答が必要ないタスクに適しているAWS Step Functionsのワークフロータイプは何ですか？`,
		options: [`Standard Workflows`, `Synchronous Express Workflows`, `Asynchronous Express Workflows`, `None of the above`],
		multipleAnswers: false,
		correctAnswers: [`Asynchronous Express Workflows`],
		explanation: `AWS Step Functionsでは、通知の送信やリアルタイム応答が必要ないタスクに対してはAsynchronous Express Workflowsが適しています。`
	}]
}, {
	id: 55,
	question: `ある銀行は、大量のAmazon S3バケットを管理しています。これらのS3バケットの一部は、社内スタッフに利用されていて、一部は外部の顧客が金融データを格納するために利用されています。年間監査のため、監査チームは、外部クライアントと共有されているおり、これらのバケットには機密データが格納されているAmazon S3バケットのリストを要求しています。この情報を最も効率的に取得するために、どの手順を実行すべきでしょうか？`,
	options: [`1. AWS IAMアクセスアドバイザーを使用して外部と共有されたAmazon S3バケットを調査します。Amazon Detectiveを使用して、これらのバケットに格納されている機密データを見つけます。`, `2. AWS IAMアクセスアナライザーを使用して、外部のエンティティと共有されたAmazon S3バケットを特定します。Amazon Macieを使用して、これらのバケットに保存されている機密情報を検出します。`, `3. AWS IAMアクセスアドバイザーを使用して外部エンティティと共有されたAmazon S3バケットを特定します。Amazon GuardDutyを使用して、これらのバケットに格納されている機密情報を検出します。`, `4. AWS IAMアクセスアナライザーを使用して、外部エンティティと共有されたAmazon S3バケットを調査します。Amazon Inspectorを使用して、これらのバケットに保存されている機密情報を検出します。`],
	multipleAnswers: false,
	correctAnswers: [`2. AWS IAMアクセスアナライザーを使用して、外部のエンティティと共有されたAmazon S3バケットを特定します。Amazon Macieを使用して、これらのバケットに保存されている機密情報を検出します。`],
	explanation: `外部エンティティと共有されたAWSリソースを特定するには、AWS IAMアクセスアナライザーを使用できます。Amazon Macieは、Amazon S3バケットに保存されたデータを評価し、機密情報を探すために使用できます。これらの発見結果は、後続の修正のために保持することができます。このシナリオでは、外部エンティティと共有されたAmazon S3バケットを特定するためにAWS IAMアクセスアナライザーを使用します。そして、これらのバケットに保存されている可能性のある機密情報を検出するためには、Amazon Macieが適切なサービスです。 選択肢1、3はAWS IAMアクセスアドバイザーを使用することを提案していますが、IAMユーザーが付与されている権限と、ユーザーがAWSリソースにアクセスしたタイミングを特定するために使用することが可能なもので、外部エンティティと共有されたAmazon S3バケットを特定するためには使用できません。また、Amazon Detectiveはセキュリティ問題を分析・研究するために使用可能なもので、Amazon S3バケットに保存されている機密情報を検出することはできません。Amazon GuardDutyは、AWSアカウントとワークロードを逐次監視するためのインテリジェント脅威検出サービスですが、Amazon S3バケットに保存されている機密情報を検出することはできません。 選択肢4は、Amazon Inspectorを使用することを提案していますが、これはAmazon EC2インスタンスでソフトウェアの脆弱性を探すために使用します。Amazon S3バケットに保存されている機密情報を検出することはできません。`,
	subQuestions: [{
		id: 1,
		question: `AWSのどのサービスを使用して、外部エンティティと共有されたAmazon S3バケットを特定することができますか？`,
		options: [`AWS IAMアクセスアドバイザー`, `AWS IAMアクセスアナライザー`, `Amazon GuardDuty`, `Amazon Detective`],
		multipleAnswers: false,
		correctAnswers: [`AWS IAMアクセスアナライザー`],
		explanation: `AWS IAMアクセスアナライザーは外部エンティティと共有されたAWSリソースを特定するためのサービスです。`
	}, {
		id: 2,
		question: `Amazon S3バケットに保存された機密情報を検出するために最適なAWSサービスは何ですか？`,
		options: [`Amazon Macie`, `Amazon Inspector`, `Amazon GuardDuty`, `AWS IAMアクセスアドバイザー`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Macie`],
		explanation: `Amazon Macieは、Amazon S3バケットに保存されたデータを評価し、潜在的な機密情報を探すために使用することができるサービスです。`
	}, {
		id: 3,
		question: `AWS IAMアクセスアドバイザーはどのような目的で使用されますか？`,
		options: [`Amazon S3バケットに保存された機密情報を検出する`, `外部エンティティと共有されたAmazon S3バケットを特定する`, `IAMユーザーが付与されている権限と、ユーザーがAWSリソースにアクセスしたタイミングを特定する`, `Amazon EC2インスタンスでソフトウェアの脆弱性を探す`],
		multipleAnswers: false,
		correctAnswers: [`IAMユーザーが付与されている権限と、ユーザーがAWSリソースにアクセスしたタイミングを特定する`],
		explanation: `AWS IAMアクセスアドバイザーは、IAMユーザーが付与されている権限と、ユーザーがAWSリソースにアクセスしたタイミングを特定するために使用されます。`
	}, {
		id: 4,
		question: `Amazon Inspectorは主にどのような目的で使用されますか？`,
		options: [`Amazon S3バケットに保存された機密情報を検出する`, `AWSアカウントとワークロードを逐次監視する`, `Amazon EC2インスタンスでソフトウェアの脆弱性を探す`, `外部エンティティと共有されたAmazon S3バケットを特定する`],
		multipleAnswers: false,
		correctAnswers: [`Amazon EC2インスタンスでソフトウェアの脆弱性を探す`],
		explanation: `Amazon Inspectorは、Amazon EC2インスタンスでソフトウェアの脆弱性を探すために使用されます。`
	}, {
		id: 5,
		question: `Amazon GuardDutyはどのような目的で使用されますか？`,
		options: [`Amazon S3バケットに保存されたデータを評価し、機密情報を探す`, `AWSアカウントとワークロードを逐次監視する`, `外部エンティティと共有されたAmazon S3バケットを特定する`, `Amazon EC2インスタンスでソフトウェアの脆弱性を探す`],
		multipleAnswers: false,
		correctAnswers: [`AWSアカウントとワークロードを逐次監視する`],
		explanation: `Amazon GuardDutyは、AWSアカウントとワークロードを逐次監視するためのインテリジェント脅威検出サービスです。`
	}]
}, {
	id: 56,
	question: `大規模なIT国際企業が複数のアカウントを統合するためにAWS Organizationsを利用しています。また、AWS Security HubもAWS Organizationsと連携しています。最近、この企業は他のIT企業と合併し、その企業もAWS Cloudリソースを保有しています。合併後の組織は、それぞれが別のAWS Organizationsを持つ形となりましたが、セキュリティ管理者はこれらのAWS Organizationsのアカウントを一つのSecurity Hub管理者アカウント下で統合したいと考えています。これを実現するために、どのアクションを行えば良いでしょうか？`,
	options: [`A. AWS Organizationsの管理アカウントから、Security Hubと連携するメンバーアカウントに対して招待を送る。`, `B. 招待を送るためのAWS Organizations管理アカウントからSecurity Hubが連携される。`, `C. Security Hub管理者アカウントから、異なるAWS Organizationsに所属するメンバーアカウントへの招待を送る。`, `D. 両方のAWS Organizationsのメンバー全員を網羅し、Security Hubの自動有効化を設定することで、両方のAWS Organizationsの全てのメンバーアカウントを一つのSecurity Hub管理者アカウント下に統合する。`],
	multipleAnswers: false,
	correctAnswers: [`C. Security Hub管理者アカウントから、異なるAWS Organizationsに所属するメンバーアカウントへの招待を送る。`],
	explanation: `AWS Security HubはAWS Organizationsと連携できます。AWS Organizationsの管理アカウントは、Security Hubの管理者アカウントとなり、AWS Organizationsの全てのメンバーアカウントのセキュリティ問題を確認する権限を持つことになります。Security HubにAWS Organizationsメンバーアカウントを追加する際には主に2つのシナリオがあります。1つ目は、同じAWS Organizations内のメンバーアカウントを手動または自動でAWS Security Hubに追加します。2つ目は、異なるAWS Organizations内のメンバーアカウントを追加する際には、手動で招待を送る流れを開始し、Security Hubの管理者アカウントから招待を送る必要があります。オプションA及びBは間違いで、招待はSecurity Hubの管理者アカウントから送らなければなりません。オプションDは間違いで、自動有効化は新しいメンバーを追加するための便利な機能ではありますが、異なるAWS Organizationsに所属するメンバーに対しては機能しません。`,
	subQuestions: [{
		id: 1,
		question: `AWS Security HubとAWS Organizationsを連携させた場合、どのアカウントが全てのメンバーアカウントのセキュリティ問題を確認する権限を持つでしょうか？`,
		options: [`AWS Security Hubの管理アカウント`, `AWS Organizationsの管理アカウント`, `両方`, `どちらでもない`],
		multipleAnswers: false,
		correctAnswers: [`AWS Organizationsの管理アカウント`],
		explanation: `AWS Security HubとAWS Organizationsを連携すると、AWS Organizationsの管理アカウントがSecurity Hubの管理者アカウントとなり、全てのメンバーアカウントのセキュリティ問題を確認する権限を持ちます。`
	}, {
		id: 2,
		question: `AWS Organizationsと連携しているSecurity Hubにメンバーアカウントを追加する手法について正しいものはどれでしょうか？`,
		options: [`自動または手動で追加する`, `手動で追加する`, `自動で追加する`, `追加することはできない`],
		multipleAnswers: false,
		correctAnswers: [`自動または手動で追加する`],
		explanation: `同じAWS Organizations内のメンバーアカウントをAWS Security Hubに追加する際には、手動または自動で追加することが可能です。`
	}, {
		id: 3,
		question: `異なるAWS Organizationsに所属するメンバーアカウントをSecurity Hubに追加するためには何が必要でしょうか？`,
		options: [`Security Hubの管理者アカウントから招待を送る`, `AWS Organizationsの管理者アカウントから招待を送る`, `自動的に追加される`, `特別なアクションは必要ない`],
		multipleAnswers: false,
		correctAnswers: [`Security Hubの管理者アカウントから招待を送る`],
		explanation: `異なるAWS Organizations内のメンバーアカウントを追加する際には、手動で招待を送る流れを開始し、Security Hubの管理者アカウントから招待を送る必要があります。`
	}, {
		id: 4,
		question: `AWS Security Hubの自動有効化機能はどのようなメンバーアカウントに対して有効でしょうか？`,
		options: [`同じAWS Organizationsに所属するメンバーアカウント`, `異なるAWS Organizationsに所属するメンバーアカウント`, `全てのメンバーアカウント`, `特定のメンバーアカウント`],
		multipleAnswers: false,
		correctAnswers: [`同じAWS Organizationsに所属するメンバーアカウント`],
		explanation: `AWS Security Hubの自動有効化は新しいメンバーを追加するための便利な機能ではありますが、異なるAWS Organizationsに所属するメンバーに対しては機能しません。`
	}, {
		id: 5,
		question: `AWS Organizationsのメンバーアカウントから招待を送ることでAWS Security Hubと連携できますか？`,
		options: [`Yes`, `No`],
		multipleAnswers: false,
		correctAnswers: [`No`],
		explanation: `AWS Organizationsのメンバーアカウントからではなく、AWS Security Hubの管理者アカウントから招待を送ることで、メンバーアカウントをAWS Security Hubに追加することができます。`
	}]
}, {
	id: 58,
	question: `ある工学系の会社がオンプレミスで保管されているデータの分析を計画しています。分析が必要なデータのアプリケーションは、データファイルを複製するためのプロトコルとしてSFTPのみをサポートしています。データ量は月の初週に急増することが予測されています。これら不規則なデータサイズに対し、無人化かつコスト効率的なデータの複製と分析を行うべきです。既にAWS Direct Connect 10ギガビットのリンクを使用したハイブリッド接続が設置されています。 このデータ転送を容易に行うためには、どのようなソリューションが考えられますか？`,
	options: [`オンプレミスのデータからAmazon S3へのファイル保存に、AWS Transferファミリを利用します。Amazon S3に保存されたデータの分析にはAmazon Athenaを活用します。`, `オンプレミスのデータからAmazon S3へのファイル保存に、AWS Data Syncを利用します。Amazon S3に保存されたデータの分析にはAmazon Athenaを活用します。`, `AWS Storage Gatewayを使い、オンプレミスからAmazon EBSへデータ転送を行います。Amazon EBSに保存されたデータ分析にはAmazon EC2インスタンス上のサードパーティ製ツールを利用します。`, `オンプレミスのデータからAmazon EFSへのファイル保存に、AWS Data Syncを利用します。Amazon EFSに保存されたデータの分析にはAmazon Athenaを活用します。`],
	multipleAnswers: false,
	correctAnswers: [`オンプレミスのデータからAmazon S3へのファイル保存に、AWS Transferファミリを利用します。Amazon S3に保存されたデータの分析にはAmazon Athenaを活用します。`],
	explanation: `AWS Transfer Familyは、SFTP、FTPS、FTP、AS2プロトコルを通じてデータファイルをAWSストレージサービスと相互に転送するための完全マネージャータイプのサービスです。これは可変型のワークロードをサポートしており、データ転送量が増大した場合にも手動で変更する必要をなくします。アプリケーションデータがAWS Transferファミリを用いてオンプレミスからAmazon S3バケットへ転送されると、Amazon AthenaはAmazon S3から直接データを分析することが可能です。Amazon Athenaはペタバイトオーダーのデータを分析できる、完全にスケーラブルなマネージド型サービスです。 選択肢Bは不正解で、AWS DataSyncはSFTPプロトコルのデータ移動に最適ではありません。選択肢Cも不正解で、AWS Storage GatewayはSFTPプロトコルをサポートしていないため、データ転送が不可能であり、Amazon EC2インスタンスとサードパーティツールの活用は追加のコストが掛かります。選択肢Dも不正解で、AWS DataSyncはSFTPプロトコルでのデータ移動に最適ではない上に、Amazon EFSへのデータ保存には大きなコストが掛かります。 AWS Transferファミリの詳細については、次のURLを参照ください。 https://aws.amazon.com/aws-transfer-family/features/?nc=sn&loc=2&dn=1`,
	subQuestions: [{
		id: 1,
		question: `AWS Transfer Familyは何をサポートしていますか？`,
		options: [`SFTP、FTPS、FTP、AS2プロトコルを通じたデータ転送`, `HTTPとHTTPSプロトコルを通じたデータ転送`, `TCPとUDPプロトコルを通じたデータ転送`, `SSHとTLSプロトコルを通じたデータ転送`],
		multipleAnswers: false,
		correctAnswers: [`SFTP、FTPS、FTP、AS2プロトコルを通じたデータ転送`],
		explanation: `AWS Transfer Familyは、SFTP、FTPS、FTP、AS2プロトコルを通じてデータファイルをAWSストレージサービスと相互に転送するための完全マネージャータイプのサービスです。`
	}, {
		id: 2,
		question: `Amazon Athenaはどのような特徴を持っていますか？`,
		options: [`ペタバイトオーダーのデータを分析できる、完全にスケーラブルなマネージド型サービス`, `データ分析が不可能なストレージサービス`, `小規模のデータのみ分析可能なサービス`, `スケーリングが難しいデータ分析サービス`],
		multipleAnswers: false,
		correctAnswers: [`ペタバイトオーダーのデータを分析できる、完全にスケーラブルなマネージド型サービス`],
		explanation: `Amazon Athenaはペタバイトオーダーのデータを分析できる、完全にスケーラブルなマネージド型サービスです。`
	}, {
		id: 3,
		question: `AWS DataSyncは何をサポートしていますか？`,
		options: [`SFTPプロトコルのデータ移動`, `HTTPとHTTPSプロトコルのデータ移動`, `NFSとSMBプロトコルのデータ移動`, `SSHとTLSプロトコルのデータ移動`],
		multipleAnswers: false,
		correctAnswers: [`NFSとSMBプロトコルのデータ移動`],
		explanation: `AWS DataSyncはNFSやSMB等のデータ移動に最適で、SFTPプロトコルのデータ移動には最適ではありません。`
	}, {
		id: 4,
		question: `AWS Storage GatewayはSFTPプロトコルをサポートしていますか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `AWS Storage GatewayはSFTPプロトコルをサポートしていないため、データ転送が不可能です。`
	}, {
		id: 5,
		question: `Amazon EFSへのデータ保存について、どのような特徴がありますか？`,
		options: [`大きなコストが掛かる`, `安価である`, `コストが全く掛からない`, `コストが固定である`],
		multipleAnswers: false,
		correctAnswers: [`大きなコストが掛かる`],
		explanation: `AWS DataSyncはSFTPプロトコルでのデータ移動に最適ではない上に、Amazon EFSへのデータ保存には大きなコストが掛かるため、コスト効率の観点からは適していません。`
	}]
}, {
	id: 59,
	question: `開発部門が、Amazon API GatewayとAWS Lambdaを利用して新規のウェブアプリケーションを設計しています。このケースではREST APIが活用され、Lambda関数は同期的に呼び出されています。増えるであろう応答を見越して、多くのクライアントの認証を安全に行う策を模索しています。この要求を最も効率良く満たせるソリューションは何でしょうか？`,
	options: [`リクエストパラメーターに基づくLambda認証者を設定し、それをAPI Gatewayが呼び出してREST APIを通じてクライアントの認証を行うようにします。`, `Amazon Cognitoユーザープールでユーザーを登録し、これを利用してAPI Gateway認証者を作るとともにREST APIに認証者を適用します。`, `特定のユーザーにマッチするリソースポリシーを設定し、そのポリシーをAmazon API Gatewayに付加してAPIへのアクセス権を制御します。`, `IAMのユーザーポリシーを設定し、APIを呼び出すためにこれをAmazon API Gatewayに適用して、APIのアクセスを制御します。`],
	multipleAnswers: false,
	correctAnswers: [`Amazon Cognitoユーザープールでユーザーを登録し、これを利用してAPI Gateway認証者を作るとともにREST APIに認証者を適用します。`],
	explanation: `Amazon Cognitoユーザープールは、API Gateway内のREST APIへのアクセスをコントロールするために利用可能です。この方法では、 1. クライアントがユーザープールでサインアップします。 2. クライアントがユーザープールでサインインすると、アイデンティティトークンを取得します。 3. クライアントはそのトークンをAPI Gatewayに渡し、API Gateway内で作られたREST APIへのアクセスを取得します。 これは、多数のグローバルユーザーへのアクセスを提供する必要がある際に最も適しています。 オプションAは間違いで、リクエストパラメーターに基づくLambda認証者はWebSocket APIのみでサポートされ、REST APIではサポートされていません。 オプションCは適用が難しく、これらのAPIへのアクセスを求めるクライアントが多いとき、リソースポリシーを用いてアクセスをコントロールするのは効率的ではありません。 オプションDは不適切で、IAMベースのポリシーはAWS InfrastructureからAPIへのアクセスをコントロールすることに適しており、外部のクライアントへのアクセス管理には適していません。 API Gatewayとの認証方法についての詳細は下記のURLを参照してください。 https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate- with-cognito.html`,
	subQuestions: [{
		id: 1,
		question: `Amazon API GatewayとAWS Lambdaを組み合わせたアプリケーション設計において、REST APIが利用されています。この場合、Lambda関数はどのように呼ばれますか？`,
		options: [`非同期`, `同期`, `エラー時`, `ランダム`],
		multipleAnswers: false,
		correctAnswers: [`同期`],
		explanation: `Amazon API GatewayとAWS Lambdaを組み合わせて設計されたウェブアプリケーションでは、REST APIが活用され、Lambda関数は同期的に呼び出されます。`
	}, {
		id: 2,
		question: `多数のクライアントの認証を行うための適切なサービスは何でしょうか？`,
		options: [`IAM`, `Amazon API Gateway`, `Amazon Cognito`, `AWS Lambda`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Cognito`],
		explanation: `Amazon Cognitoは、ユーザーの認証とアクセス管理を行うためのサービスで、大量のクライアントへの認証を効率良く行うことができます。`
	}, {
		id: 3,
		question: `リクエストパラメータに基づくLambda認証者はどのAPIでのみサポートされていますか？`,
		options: [`REST API`, `WebSocket API`, `HTTP API`, `RPC API`],
		multipleAnswers: false,
		correctAnswers: [`WebSocket API`],
		explanation: `リクエストパラメータに基づくLambda認証者はWebSocket APIでのみサポートされ、REST APIではサポートされていません。`
	}, {
		id: 4,
		question: `リソースポリシーを用いてアクセスをコントロールするとき、その適用が難しい状況はどのようなときでしょうか？`,
		options: [`一部のユーザーがAPIへのアクセスを求めるとき`, `管理者がAPIへのアクセスを求めるとき`, `多数のクライアントがAPIへのアクセスを求めるとき`, `外部のクライアントがAPIへのアクセスを求めるとき`],
		multipleAnswers: false,
		correctAnswers: [`多数のクライアントがAPIへのアクセスを求めるとき`],
		explanation: `多数のクライアントがAPIへのアクセスを求めるときには、リソースポリシーを用いてアクセスをコントロールするのは効率的ではありません。`
	}, {
		id: 5,
		question: `AWS インフラからAPIへのアクセスをコントロールすることに適しているポリシーは何でしょうか？`,
		options: [`IAMベースのポリシー`, `ユーザーポリシー`, `特定のユーザーにマッチするリソースポリシー`, `Amazon Cognitoユーザープールポリシー`],
		multipleAnswers: false,
		correctAnswers: [`IAMベースのポリシー`],
		explanation: `IAMベースのポリシーは、AWSインフラからAPIへのアクセスをコントロールすることに適しています。外部のクライアントへのアクセス管理には適していません。`
	}]
}, {
	id: 60,
	question: `Javaで開発されたウェブアプリケーションがオンプレミスからAWSへの移行が完了しました。移行に際しては、Amazon Elastic Beanstalkを用い、ALB、マルチAZ配置されたAmazon EC2インスタンス、そしてAmazon DynamoDBのプロビジョニング容量モードを採用してアプリケーションが展開されています。存続性のAmazon EC2インスタンスを使用したAuto-scalingグループも導入されています。しかし、移行後、利用者から混雑時間帯のアプリケーションレスポンスが遅いというフィードバックを受けています。詳しく調査を行った結果、アプリケーションは、Amazon EC2インスタンスに負荷をもたらす重要度の低いzipアーカイブ作成処理を行なっていることが確認されました。`,
	options: [`アプリケーションをElastic Beanstalkのワーカー環境に再配置し、Amazon SQSとAmazon EC2インスタンスを通じてzipアーカイブ処理を実行します。フロントエンドには、ALB、Amazon EC2インスタンス、およびAmazon DynamoDBを用いたウェブサーバー環境を使用します。`, `一般的なAmazon EC2インスタンスをメモリ集約型のAmazon EC2インスタンスに置き換えてAuto-scalingグループを再配置します。`, `アプリケーションをElastic Fabric Adapter（EFA）を搭載したAmazon EC2インスタンスに再配置します。`, `データベースレイヤーをAmazon DynamoDBのプロビジョニング容量モードからオンデマンド容量モードに変更して再配置します。`],
	multipleAnswers: false,
	correctAnswers: [`アプリケーションをElastic Beanstalkのワーカー環境に再配置し、Amazon SQSとAmazon EC2インスタンスを通じてzipアーカイブ処理を実行します。フロントエンドには、ALB、Amazon EC2インスタンス、およびAmazon DynamoDBを用いたウェブサーバー環境を使用します。`],
	explanation: `長寿命のタスクを処理するために、Amazon Elastic Beanstalkではワーカー環境のデプロイが許可されています。長時間必要なジョブはAmazon SQSキューに送信され、その後、ワーカー環境内のAmazon EC2インスタンスで実行されます。上述のケースでは、Amazon EC2インスタンスに展開されたアプリケーションは、重要性が低いzipアーカイブプロセスによる性能低下が生じています。コスト効率的にこの問題を解決するために、zipプロセスを別層に分離し、混雑時間帯のアプリケーションパフォーマンスを改善することができます。メモリ集約型Amazon EC2インスタンスの使用は費用が増加するため、オプションBは不適切です。ZIPアーカイブは計算集約型のプロセスであり、メモリ集約型のAmazon EC2インスタンスを使用するとアプリケーションは高価になります。Elastic Fabric Adapterを持つAmazon EC2インスタンス（オプションC）はノード間通信がいるアプリケーションには適していますが、上述のケースではアプリケーションの応答に影響を与えているのは非重要なプロセスがAmazon EC2インスタンスで実行されているためです。データベース層の容量モードを変更する（オプションD）も解決策となりません。ZIPアーカイブ処理の非重要なタスクが問題ですので、これにより結果的にコストが増加します。`,
	subQuestions: [{
		id: 1,
		question: `Amazon Elastic Beanstalkのワーカー環境が許可されているのはどのようなタイプのタスクですか？`,
		options: [`短期間のタスク`, `長寿命のタスク`, `スケジュールされたタスク`, `リアルタイムタスク`],
		multipleAnswers: false,
		correctAnswers: [`長寿命のタスク`],
		explanation: `Amazon Elastic Beanstalkのワーカー環境は、長寿命のバックグラウンドタスクの処理が許可されています。これは、リクエスト/応答型のユーザーインターフェースとは対照的な、キューベースのインターフェースを提供します。`
	}, {
		id: 2,
		question: `ワーカー環境内のAmazon EC2インスタンスで実行されるジョブはどのように送信されますか？`,
		options: [`Amazon SQSキュー`, `Amazon SNSトピック`, `Amazon Kinesisストリーム`, `Amazon MQキュー`],
		multipleAnswers: false,
		correctAnswers: [`Amazon SQSキュー`],
		explanation: `長時間必要なジョブはAmazon SQSキューに送信され、その後、ワーカー環境内のAmazon EC2インスタンスで実行されます。`
	}, {
		id: 3,
		question: `メモリ集約型Amazon EC2インスタンスの使用は、コスト以外の観点から不適切と考えられるのはなぜですか？`,
		options: [`メモリ集約型インスタンスは計算能力が低い`, `メモリ集約型インスタンスはストレージ容量が少ない`, `メモリ集約型インスタンスはネットワーク帯域幅が少ない`, `ZIPアーカイブは計算集約型のプロセスであり、メモリ集約型のAmazon EC2インスタンスを使用するとアプリケーションは高価になる`],
		multipleAnswers: false,
		correctAnswers: [`ZIPアーカイブは計算集約型のプロセスであり、メモリ集約型のAmazon EC2インスタンスを使用するとアプリケーションは高価になる`],
		explanation: `ZIPアーカイブは、一般的に計算集約的なプロセスであり、メモリ集約型のアマゾンEC2インスタンスは、メモリ集約的なタスクに最適化されています。そのため、メモリ集約型のインスタンスを用いてZIPアーカイブを行うと、アプリケーションのコストが上昇し、インスタンスの計算能力が十分に活用できない可能性があります。`
	}, {
		id: 4,
		question: `Elastic Fabric Adapterを持つAmazon EC2インスタンスはどのようなアプリケーションに適していますか？`,
		options: [`ノード間通信がいるアプリケーション`, `バックエンドデータベースが存在するアプリケーション`, `ビデオストリーミングのようなメディアリッチアプリケーション`, `高いリード/ライト速度が必要なアプリケーション`],
		multipleAnswers: false,
		correctAnswers: [`ノード間通信がいるアプリケーション`],
		explanation: `Elastic Fabric Adapter (EFA) は、ノード間通信を要求するアプリケーションに特に適しています。これは、高性能計算 (HPC) アプリケーションや分散機械学習など、高度なネットワーキング機能を必要とするアプリケーションに適しています。`
	}, {
		id: 5,
		question: `Amazon DynamoDBのプロビジョニング容量モードからオンデマンド容量モードに変更することで直接解決される問題は何ですか？`,
		options: [`データベースのパフォーマンス`, `データベースの可用性`, `データベースのコスト管理`, `データベースのスケーラビリティ`],
		multipleAnswers: false,
		correctAnswers: [`データベースのコスト管理`],
		explanation: `DynamoDBのオンデマンド容量モードは、同時リクエストの数が予測できない場合や使用量がうまく予測できない場合に最適です。オンデマンドモードで、料金は読み取りおよび書き込みに対してのみ支払われます。これにより、効率的なコスト管理が可能となりますが、この変更自体がアプリケーションのパフォーマンスに直接影響を与えるわけではありません。`
	}]
}, {
	id: 61,
	question: `スタートアップの企業が数千のIoTデバイスからセンサーデータを収集するための新しい3つのレイヤーを持つアプリケーションを開発しています。これらのデータは少量ながらも、効率的にデータベースへ書き込まれなければなりません。長期の保存と迅速な分析クエリの実行が必要とされています。アプリケーション層とウェブ層のソリューションは既に策定されていますが、企業は高負荷対応可能な読み書き可能なデータベースを探しています。これらの需要に対応する最良の設計とは何でしょうか？`,
	options: [`高速な分析クエリに対応するためにマグネティックストアを使用し、高スループットのデータ書き込みに対応するためにAmazon Timestreamのメモリストアを使用します。`, `高速な分析クエリに対応するために プロビジョンドIOPS SSD を使用し、高スループットのデータ書き込みに対応するためにAmazon RDSの汎用SSDを使用します。`, `高速な分析クエリに対応するために汎用SSDを使用し、高スループットのデータ書き込みに対応するためにAmazon RDSのプロビジョンドIOPS SSDを使用します。`, `高速な分析クエリに対応するためにメモリストアを使用し、高スループットのデータ書き込みに対応するためにAmazon Timestreamのマグネティックストアを使用します。`],
	multipleAnswers: false,
	correctAnswers: [`高速な分析クエリに対応するためにマグネティックストアを使用し、高スループットのデータ書き込みに対応するためにAmazon Timestreamのメモリストアを使用します。`],
	explanation: `Amazon Timestreamは、イベントを保存し分析するためのサーバーレスでスケーラブルな時系列データベースサービスです。リレーショナルデータベースを使用するよりコストパフォーマンスが高いです。Timestreamには、メモリストアとマグネティックストアの2つのストレージレイヤがあり両方のストレージレイヤのデータは、リージョン内の複数のアベイラビリティゾーンへ複製されます。リテンションポリシーに基づき、データはメモリストアからマグネティックストアへ移動します。メモリストアは高スループットのデータ書き込みと速い時系列クエリに適しています。一方、マグネティックストアは低スループットのデータ書き込み,高速な分析クエリ,長期間のデータストレージに適しています。時系列データのRDS使用はTimestream使用のコストに比べて高くなるため、オプションBとCは不適切です。オプションDは理解が逆で、Amazon Timestreamでは、高スループットデータ書き込み用にメモリストアを、高速な分析クエリ用にマグネティックストアを使用すべきです。Amazon Timestreamのストレージについての詳細は公式のドキュメンテーションを参照してください。`,
	subQuestions: [{
		id: 1,
		question: `Amazon Timestreamについての記述のうち、正しいものはどれでしょうか？`,
		options: [`Amazon Timestreamは、画像やビデオなどの大容量データを保存し分析するためのサービスである。`, `Amazon Timestreamは、時間を基にするイベントの記録と分析に最適な、時系列データベースサービスである。`, `Amazon Timestreamは、常に最新のデータを即時に保存し、過去のデータは自動的に削除されるサービスである。`, `Amazon Timestreamのデータは、指定したリージョン内の一つのアベイラビリティゾーンにのみ保存される。`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Timestreamは、時間を基にするイベントの記録と分析に最適な、時系列データベースサービスである。`],
		explanation: `Amazon Timestreamは、イベントの保存と分析を目的とした時系列データベースであり、画像やビデオの保存に特化したサービスではないです。また、過去のデータを自動的に削除するという特性もありません。データはリージョン内の複数のアベイラビリティゾーンに自動的に複製されます。`
	}, {
		id: 2,
		question: `Amazon Timestreamのストレージレイヤについての記述のうち、正しいものはどれでしょうか？`,
		options: [`Amazon Timestreamにはストレージレイヤはなく、全てのデータは一つの場所に保存される。`, `Amazon Timestreamには、データの書き込みと早期の時系列クエリ実行に適したメモリストアと、分析クエリ及び長期間のデータ保存に適したマグネティックストアの二つのストレージレイヤがある。`, `Amazon Timestreamのストレージレイヤは全てユーザーが自由に選択でき、場合によってはSSDやHDDに保存することも可能である。`, `Amazon Timestreamのストレージレイヤは全て一定期間ごとに自動的に切替えされる。`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Timestreamには、データの書き込みと早期の時系列クエリ実行に適したメモリストアと、分析クエリ及び長期間のデータ保存に適したマグネティックストアの二つのストレージレイヤがある。`],
		explanation: `Amazon Timestreamには、データの書き込みと早期の時系列クエリに適するメモリストアと、分析クエリ及び長期間のデータストレージに適するマグネティックストアの二つのストレージレイヤがあります。`
	}, {
		id: 3,
		question: `以下のうち、Amazon Timestreamのメモリストアの特性として適するものはどれでしょうか？`,
		options: [`高速な分析クエリを実行するのに適している。`, `低スループットのデータ書き込みに適している。`, `高スループットのデータ書き込みに適している。`, `長期間のデータストレージに適している。`],
		multipleAnswers: false,
		correctAnswers: [`高スループットのデータ書き込みに適している。`],
		explanation: `Amazon Timestreamのメモリストアは、高スループットのデータ書き込みと早期の時系列クエリに適しています。`
	}, {
		id: 4,
		question: `以下のうち、Amazon Timestreamのマグネティックストアの特性として適するものはどれでしょうか？`,
		options: [`高スループットのデータ書き込みに適している。`, `高速な分析クエリを実行するのに適している。`, `早期の時系列クエリに適している。`, `常に新規のデータ書き込みが最優先される。`],
		multipleAnswers: false,
		correctAnswers: [`高速な分析クエリを実行するのに適している。`],
		explanation: `Amazon Timestreamのマグネティックストアは、高速な分析クエリの実行と長期間のデータストレージに適しています。`
	}, {
		id: 5,
		question: `以下の記述のうち、Amazon Timestreamのデータ複製について正しいものはどれか。`,
		options: [`Amazon Timestreamはデータをリージョン内の複数のアベイラビリティゾーンに自動的に複製する。`, `Amazon Timestreamのデータは、元のデータが削除されると、そのコピーもすぐに削除される。`, `Amazon Timestreamはデータをプライマリリージョンから他のリージョンに自動的に複製する。`, `Amazon Timestreamはデータをバックアップと復元のためにS3バケットに自動的に複製する。`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Timestreamはデータをリージョン内の複数のアベイラビリティゾーンに自動的に複製する。`],
		explanation: `Amazon Timestreamのデータはリージョン内の複数のアベイラビリティゾーンに自動的に複製されます。これにより、データの可用性と耐久性が確保されます。`
	}]
}, {
	id: 62,
	question: `ある企業がレガシーなウェブアプリケーションをAmazon EC2 Linuxインスタンスに配置しており、それはインスタンスストアにバックアップされています。アプリケーションはus-west-1リージョンにてうまく配置できたため、企業は他のリージョンでも早急にデプロイを行いたいと考えています。そのために、既存のAmazon EC2インスタンスからAMIを短期間かつ効果的に作成する手段を取ることを試みています。ソリューションアーキテクトがこのニーズに対応するために取り組むべき手続きはどれですか？`,
	options: [`1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-imageコマンドを使用してバンドルを整備する 3. Amazon S3のバケットへバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-volumeコマンドでAMIを登録する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon S3のバケットへバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-imageコマンドでAMIを登録する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon EBSボリュームにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-instanceコマンドでAMIを登録する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-imageコマンドを使用してバンドルを整備する 3. Amazon EBSボリュームにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. imagebuilderコマンドでAMIを登録する`],
	multipleAnswers: false,
	correctAnswers: [`1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon S3のバケットへバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-imageコマンドでAMIを登録する`],
	explanation: `AMIの作成は、インスタンスストアバックアップされたLinuxインスタンスに対して次のような手順で実現可能です。 1. 認証情報をインスタンスにアップロードします。これを行うことで、AMIへのアクセスがユーザーとAmazon EC2インスタンスのみに制限されます。 2. ec2-bundle-volコマンドを使用してバンドルを準備します。この操作は/tmpディレクトリに圧縮暗号化ファイルを生成します。バンドルから一部のファイルを除外することが必要な場合は、-eオプションのコマンドでそれらのファイルを除外できます。 3. ec2-upload-bundleコマンドを使用してAmazon S3バケットにバンドルをアップロードします。このコマンドはAmazon S3にてバケットへバンドルをアップロードします。 4. register-imageコマンドを使用してAMIを登録します。この操作は特定のリージョンにおけるAMIの登録に必要です。 オプションAは不適当である理由、それは、Amazon EC2インスタンスでバンドルを作成する際、正しいコマンドはec2-bundle-volであり、ec2-bundle-imageではなく、register-volumeはAMIの登録の際には不適当なコマンドです。 オプションCも不適当であり、その理由は、バンドルはAmazon EBSボリュームではなくAmazon S3バケットにアップロードすべきであるためです。また、register-instanceはAMIの登録には不適当なコマンドとなります。 オプションDも不適当です。その理由は、Amazon EC2インスタンスでバンドルを作成する際、正しいコマンドはec2-bundle-volであり、ec2-bundle-imageではなく、また、バンドルはAmazon EBSボリュームではなくAmazon S3バケットにアップロードすべきであり、更に、imagebuilderはAMI登録には不適当なコマンドです。 インスタンスストアーでバックアップされたLinuxインスタンスからAMIを効率的に作成する方法については以下のURLをご参照ください。https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-instance-store-ami.html#amazon_linux_instructions`,
	subQuestions: [{
		id: 1,
		question: `Amazon EC2 Linuxインスタンスに配置したアプリケーションのバックアップをインスタンスストアに保管しています。アプリケーションの運用リージョンを増やすため、既存のインスタンスからAMIを作成したいと考えています。AMI作成の手順として正しいものはどれですか？`,
		options: [`1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-imageコマンドを使用してバンドルを整備する 3. Amazon S3のバケットへバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-volumeコマンドでAMIを登録する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon S3のバケットへバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-imageコマンドでAMIを登録する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon EBSボリュームにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-instanceコマンドでAMIを登録する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-imageコマンドを使用してバンドルを整備する 3. Amazon EBSボリュームにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. imagebuilderコマンドでAMIを登録する`],
		multipleAnswers: false,
		correctAnswers: [`1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon S3のバケットへバンドルをアップロードするためにec2-upload-bundleコマンドを利用する 4. register-imageコマンドでAMIを登録する`],
		explanation: `AMIの作成は、インスタンスストアバックアップされたLinuxインスタンスに対して次のような手順で実現可能です。 1. 認証情報をインスタンスにアップロードします。これを行うことで、AMIへのアクセスがユーザーとAmazon EC2インスタンスのみに制限されます。 2. ec2-bundle-volコマンドを使用してバンドルを準備します。この操作は/tmpディレクトリに圧縮暗号化ファイルを生成します。バンドルから一部のファイルを除外することが必要な場合は、-eオプションのコマンドでそれらのファイルを除外できます。 3. ec2-upload-bundleコマンドを使用してAmazon S3バケットにバンドルをアップロードします。このコマンドはAmazon S3にてバケットへバンドルをアップロードします。 4. register-imageコマンドを使用してAMIを登録します。この操作は特定のリージョンにおけるAMIの登録に必要です。`
	}, {
		id: 2,
		question: `インスタンスストアにバックアップされたLinuxインスタンスからAMIを作成する際の手順として誤っている選択肢はどれですか？`,
		options: [`1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. ec2-upload-bundleコマンドを利用する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-imageコマンドを使用してバンドルを整備する 3. Amazon S3のバケットにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon EBSボリュームにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する`, `1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-volコマンドを使用してバンドルを整備する 3. Amazon S3のバケットにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する`],
		multipleAnswers: false,
		correctAnswers: [`1. 認証情報をインスタンスにアップロードする 2. ec2-bundle-imageコマンドを使用してバンドルを整備する 3. Amazon S3のバケットにバンドルをアップロードするためにec2-upload-bundleコマンドを利用する`],
		explanation: `AMIの作成は、インスタンスストアバックアップされたLinuxインスタンスに対して次のような手順で実現可能です。 1. 認証情報をインスタンスにアップロードします。これを行うことで、AMIへのアクセスがユーザーとAmazon EC2インスタンスのみに制限されます。 2. ec2-bundle-volコマンドを使用してバンドルを準備します。この操作は/tmpディレクトリに圧縮暗号化ファイルを生成します。バンドルから一部のファイルを除外することが必要な場合は、-eオプションのコマンドでそれらのファイルを除外できます。 3. ec2-upload-bundleコマンドを使用してAmazon S3バケットにバンドルをアップロードします。このコマンドはAmazon S3にてバケットへバンドルをアップロードします。 したがって、ec2-bundle-imageコマンドを使用してバンドルを整備するという選択肢は誤りです。正しくはec2-bundle-volコマンドを使用します。`
	}, {
		id: 3,
		question: `バンドルをアップロードするために利用する適切な場所はどこですか？`,
		options: [`Amazon EC2インスタンス`, `Amazon EBSボリューム`, `Amazon S3バケット`, `Amazon RDSインスタンス`],
		multipleAnswers: false,
		correctAnswers: [`Amazon S3バケット`],
		explanation: `ec2-upload-bundleコマンドを使用してAmazon S3バケットにバンドルをアップロードします。このコマンドはAmazon S3にてバケットへバンドルをアップロードします。他の選択肢のAmazon EC2インスタンス、Amazon EBSボリューム、Amazon RDSインスタンスにバンドルをアップロードすることはできません。`
	}, {
		id: 4,
		question: `AMIの作成において、AMIへのアクセスがユーザーとAmazon EC2インスタンスのみに制限されるようにするためにどのような手順を踏みますか？`,
		options: [`ec2-bundle-volコマンドを使用してバンドルを準備する`, `Amazon S3バケットにバンドルをアップロードする`, `認証情報をインスタンスにアップロードする`, `register-imageコマンドを使用してAMIを登録する`],
		multipleAnswers: false,
		correctAnswers: [`認証情報をインスタンスにアップロードする`],
		explanation: `認証情報をインスタンスにアップロードします。これを行うことで、AMIへのアクセスがユーザーとAmazon EC2インスタンスのみに制限されます。`
	}, {
		id: 5,
		question: `バンドルから一部のファイルを除外するために使用するコマンドのオプションは何ですか？`,
		options: [`-d`, `-r`, `-u`, `-e`],
		multipleAnswers: false,
		correctAnswers: [`-e`],
		explanation: `ec2-bundle-volコマンドには、-eオプションがあります。バンドルから一部のファイルを除外することが必要な場合は、このオプションでそれらのファイルを除外できます。`
	}]
}, {
	id: 63,
	question: `あるIT企業がAmazon EC2のインスタンスとともにAmazon RDSを採用してWebアプリケーションをAWSクラウド上に展開しています。近くに報告があったように、Amazon RDS DBのインスタンスの記憶領域の不足により停止してしまいました。オペレーションチームはDBインスタンスを復元しましたが、チームのマネージャーはDBインスタンスの記憶領域を行動的にモニターし、記憶領域が低下したときに通知を送るよう提案しました。また、ワークロードが予測不可能故に、管理チームはRDSインスタンスが手動的な干渉を必要とせずに追加のストレージ要求に対応できる設定を希望しています。 これらの要望を満たすためにどのような解決策を実行すべきでしょうか？（２つ選択してください）`,
	options: [`Amazon EBS最適化インスタンスにAmazon RDSを展開する`, `Amazon CloudWatchのFreeStorageSpaceメトリクスを使ってDBインスタンスの利用可能なストレージスペースを監視し、閾値を超えたときは通知を設定する`, `Amazon RDS DBインスタンスのProvisioned IOPS SSDストレージタイプを利用設定する`, `Amazon CloudWatchのFreeLocalStorageメトリクスを用いてDBインスタンスの利用可能ストレージスペースを監視し、閾値を超えたときは通知を設定する`, `Amazon RDS DBインスタンスのストレージの自動スケーリングを利用設定する`],
	multipleAnswers: true,
	correctAnswers: [`Amazon CloudWatchのFreeStorageSpaceメトリクスを使ってDBインスタンスの利用可能なストレージスペースを監視し、閾値を超えたときは通知を設定する`, `Amazon RDS DBインスタンスのストレージの自動スケーリングを利用設定する`],
	explanation: `Amazon RDS DBインスタンスの利用可能な記憶領域はAmazon CloudWatchのFreeStorageSpaceメトリクスを用いて監視することが可能です。DBインスタンスのストレージスペースを自動でスケールアップするためにはストレージの自動スケーリング設定を有効にします。この機能は、DBインスタンスのストレージ需給を必要に応じて調整が必要な予測不可能なワークロードに対応性があります。ストレージの自動スケーリングが有効になると、Amazon RDSは以下の状況のいずれかが達成されたときにストレージ変更を始めます。 1. 利用可能なフリーストレージが全体ストレージの10％以下である。 2. ストレージ不足から少なくとも5分間経過している 3. DBインスタンスの最後のストレージ変更またはストレージ最適化から少なくとも6時間が過ぎている。 オプションAは、Amazon EBSインスタンスを利用しても、自動的にストレージが埋もれる問題解消は出来ないため、不適当です。 オプションC、Provisioned IOPS SSDストレージ設定を使用すると、性能は向上しますが、'ストレージが埋もれる'問題を自動的に解消することは出来ません、故に不適当です。 オプションDは、Amazon CloudWatchを利用するメトリクスはFreeStorageSpaceであり、FreeLocalStorageではありません、したがって不適当です。FreeLocalStorageはAurora MySQLとAurora PostgreSQLのローカルストレージの利用可能度を判定するために利用されます。 Amazon RDSのストレージフルに関する問題解決については、以下のURLを参照してください。 https://aws.amazon.com/premiumsupport/knowledge-center/rds-out-of-storage/ https://aws.amazon.com/premiumsupport/knowledge-center/storage-full-rds-cloudwatch-alarm/`,
	subQuestions: [{
		id: 631,
		question: `Amazon RDS DBのインスタンスの記憶領域をモニターするために何を使用しますか？`,
		options: [`Amazon EBS`, `Amazon CloudWatchのFreeStorageSpaceメトリクス`, `Amazon RDS DBインスタンスのProvisioned IOPS SSDストレージタイプ`, `Amazon CloudWatchのFreeLocalStorageメトリクス`],
		multipleAnswers: false,
		correctAnswers: [`Amazon CloudWatchのFreeStorageSpaceメトリクス`],
		explanation: `Amazon RDS DBインスタンスの利用可能な記憶領域はAmazon CloudWatchのFreeStorageSpaceメトリクスを用いて監視することが可能です。Amazon CloudWatchはAmazon Web Services（AWS）とプライベートクラウド資源のモニタリングサービスです。`
	}, {
		id: 632,
		question: `記憶領域が低下したときに通知を送るために何を設定しますか？`,
		options: [`Amazon EBS`, `Amazon CloudWatchのFreeStorageSpaceメトリクス`, `Amazon RDS DBインスタンスのProvisioned IOPS SSDストレージタイプ`, `Amazon CloudWatchのFreeLocalStorageメトリクス`],
		multipleAnswers: false,
		correctAnswers: [`Amazon CloudWatchのFreeStorageSpaceメトリクス`],
		explanation: `Amazon CloudWatchのFreeStorageSpaceメトリクスを使用してDBインスタンスの利用可能なストレージスペースを監視し、その閾値を超えたときに通知を送るように設定します。`
	}, {
		id: 633,
		question: `ストレージ要求に対応するために何をするべきですか？`,
		options: [`Amazon EBS`, `Amazon CloudWatchのFreeStorageSpaceメトリクス`, `Amazon RDS DBインスタンスのProvisioned IOPS SSDストレージタイプを利用設定する`, `Amazon RDS DBインスタンスのストレージの自動スケーリングを利用設定する`],
		multipleAnswers: false,
		correctAnswers: [`Amazon RDS DBインスタンスのストレージの自動スケーリングを利用設定する`],
		explanation: `ストレージ要求に対応するためには、Amazon RDS DBインスタンスのストレージの自動スケーリングを利用設定することが必要です。自動スケーリングは、DBインスタンスのストレージ容量が予測不能なワークロードに対応できるように設定する機能です。`
	}, {
		id: 634,
		question: `Amazon EBS最適化インスタンスにAmazon RDSを展開することは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `Amazon EBS最適化インスタンスにAmazon RDSを展開することは、自動的にストレージが埋もれる問題解消には寄与しません。`
	}, {
		id: 635,
		question: `Amazon CloudWatchのFreeLocalStorageメトリクスを用いてDBインスタンスの利用可能ストレージスペースを監視できますか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `Amazon CloudWatchのFreeLocalStorageメトリクスはAurora MySQLとAurora PostgreSQLのローカルストレージの利用可能度を判定するために利用されるため、DBインスタンスの利用可能ストレージスペースの監視には用いることができません。`
	}]
}, {
	id: 64,
	question: `映像制作会社は、すべての映像資産を保存するためにAmazon S3バケットを使用しています。最近、アカウント内の全ユーザーが作成した数百万のオブジェクトを含む新たなS3バケットでSSE-KMSによる暗号化を行いました。財務部からは、Amazon S3バケットの暗号化を実行してからのコストの急激な増加を受け、コスト削減と管理コストの最小化を検討するよう依頼がきました。最もコスト効率の良いソリューションの設計はどれですか？`,
	options: [`KMSキーのキーマテリアルの起源をExternalに設定`, `アプリケーションで保存されているキーを利用したクライアントサイドの暗号化を設定`, `顧客提供キー(SSE-C)を用いたサーバーサイドの暗号化を設定`, `SSE-KMS用のS3バケットキーを設定`],
	multipleAnswers: false,
	correctAnswers: [`SSE-KMS用のS3バケットキーを設定`],
	explanation: `大量のオブジェクトがAmazon S3バケットに保存され、SSE-KMSを用いて暗号化された場合、Amazon S3は各オブジェクトに対しだれでも変えられないKMSデータキーを採用します。これは、Amazon S3バケットとAWS KMS間のリクエストが増加し、したがってコストも増加します。これを軽減するためには、SSE-KMSと一緒にAmazon S3バケットキーを使用できます。キーがバケットと共に設定されていると、AWSは短期間のバケットキーを作成しバケット内にローカルに保存します。バケット内のすべてのオブジェクトについては、データキーの要求をAWS KMSに行う代わりにバケットキーを用いるようになり、Amazon S3とAWS KMS間のトラフィックが減少し、大幅なコスト削減を達成できます。また、他の選択肢については以下のとおり不適当です。Aオプションは、KMSキーに使用されるキーマテリアルを外部からインポートすることを意味しますが、コスト削減につながりません。Bオプションでは、アプリケーション内にキーが保存されている場合、暗号化と復号化はクライアントによって行われるため、クライアント側での管理作業が増えます。Cオプションでは、顧客提供キーを用いたサーバーサイドの暗号化を設定した場合、クライアントはキーの管理を行う必要があり、これもクライアント側での管理作業が増えます。Amazon S3バケットキーの使用方法の詳細は以下のURLを参照してください。https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-key.html`,
	subQuestions: [{
		id: 1,
		question: `Amazon S3バケットキーの使用により、どのような効果が期待できますか？`,
		options: [`大幅なコスト削減`, `暗号化されたデータが一瞬で複合化できる`, `Amazon S3バケットがユーザーに配信する速度を上げる`, `Amazon S3バケット内のデータを自動的にバックアップする`],
		multipleAnswers: false,
		correctAnswers: [`大幅なコスト削減`],
		explanation: `Amazon S3バケットキーを使用すると、Amazon S3とAWS KMS間のトラフィックが減少し、大幅なコスト削減を達成できます。`
	}, {
		id: 2,
		question: `顧客提供キー(SSE-C)を用いたサーバーサイドの暗号化を設定した場合、どのような管理作業が増える可能性がありますか？`,
		options: [`クライアントはキーの管理を行う必要があります`, `AWSはキーマネージメントを強制します`, `クライアントはデータのバックアップを行う必要があります`, `AWSはデータの管理を行う必要があります`],
		multipleAnswers: false,
		correctAnswers: [`クライアントはキーの管理を行う必要があります`],
		explanation: `顧客提供キーを用いたサーバーサイドの暗号化を設定した場合、クライアントはキーの管理を行う必要があります。これによりクライアント側での管理作業が増えます。`
	}, {
		id: 3,
		question: `アプリケーションで保存されているキーを利用したクライアントサイドの暗号化を設定した場合、どのような影響が考えられますか？`,
		options: [`クライアント側での管理作業が増えます`, `クライアント側では何もしないままで盗難から保護できます`, `クライアントはデータのバックアップを行う必要があります`, `全てのユーザーのデータアクセス速度が向上します`],
		multipleAnswers: false,
		correctAnswers: [`クライアント側での管理作業が増えます`],
		explanation: `アプリケーション内にキーが保存されている場合、暗号化と復号化はクライアントによって行われるため、クライアント側での管理作業が増えます。`
	}, {
		id: 4,
		question: `KMSキーのキーマテリアルの起源をExternalに設定することで、どのような効果がありますか？`,
		options: [`コスト削減につながります`, `キーマテリアルを外部からインポートできます`, `全てのユーザーデータのアクセス速度が向上します`, `DBサーバーのレスポンス時間が改善します`],
		multipleAnswers: false,
		correctAnswers: [`キーマテリアルを外部からインポートできます`],
		explanation: `KMSキーのキーマテリアルの起源をExternalに設定すると、キーマテリアルを外部からインポートすることができます。しかしこれはコスト削減にはつながりません。`
	}, {
		id: 5,
		question: `大量のオブジェクトがAmazon S3バケットに保存され、SSE-KMSを用いて暗号化された場合、何が原因でコストが増加する可能性がありますか？`,
		options: [`データの保存容量自体の増加`, `SSE-KMSデータキーによるリクエストの増加`, `S3バケットスナップショットの生成`, `データのダウンロード数の増加`],
		multipleAnswers: false,
		correctAnswers: [`SSE-KMSデータキーによるリクエストの増加`],
		explanation: `大量のオブジェクトがAmazon S3バケットに保存され、SSE-KMSを用いて暗号化された場合、各オブジェクトに対しだれでも変えられないKMSデータキーが採用されるため、Amazon S3とAWS KMS間のリクエストが増え、それによりコストも増加します。`
	}]
}, {
	id: 65,
	question: `ある金融業界の企業が新規で重要なアプリケーションを展開し、Amazon RDS for SQL serverをus-east-1リージョンで用いてデータベースをセットアップしています。この企業は、リージョン停止に伴うデータ損失を緩和するために、異なるリージョンで追加データベースを構築する計画を立てています。このデータベースの展開の主目的は、最小限のRTOとRPOを提供することです。企業は、現行のデータベースを異なるリージョンにレプリケートし、DBインスタンスを迅速且つ効率的にリストアするための最も費用対効果の高い解決策を模索しています。この要件を満たすためにどのようなアーキテクチャを推奨しますか？`,
	options: [`DBインスタンスにおけるクロスリージョンの自動バックアップレプリケーションを活用し、そのスナップショットを用いて異なるリージョンでDBインスタンスをリストアします。`, `AWS Backupを活用し、別のリージョンで自動バックアップのスナップショットを生成します。このスナップショットを用いて異なるリージョンでDBインスタンスをリストアします。`, `DBスナップショットデータをAmazon S3にエクスポートし、Amazon S3のクロスリージョンレプリケーションを活用して、このスナップショットを異なるリージョンにコピーします。このスナップショットを用いて異なるリージョンでDBインスタンスをリストアします。`, `AWS Lambda機能を活用し、データベースのスナップショットを異なるリージョンへコピーおよび生成します。このスナップショットを用いて異なるリージョンでDBインスタンスをリストアします。`],
	multipleAnswers: false,
	correctAnswers: [`DBインスタンスにおけるクロスリージョンの自動バックアップレプリケーションを活用し、そのスナップショットを用いて異なるリージョンでDBインスタンスをリストアします。`],
	explanation: `解答はAです。 Amazon RDS for SQL serverでは、Amazon RDSのクロスリージョン自動バックアップを活用して管理型ディザスタリカバリー(DR)を行うことをサポートしています。この特徴は、異なるリージョンでRDSスナップショットとトランザクションログの自動バックアップが可能です。これにより、異なるリージョンで新規DBインスタンスを手早く復旧できるようになり、RPO(Recovery Point Objective)とRTO(Recovery Time Objective)を最小の単位時間に縮めることが可能となります。 重要なデータベースに関しては、バックアップ保存期間内の特定の時点まで復元することが可能です。DBインスタンスは、主要リージョンで災害が発生した場合のみ復元が必要で、異なるリージョンで一貫してDBインスタンスを稼働させる必要がありません。この選択肢は、管理上のオーバーヘッドを削減するための選択肢を提供します。 選択肢Bは適していません。AWS Backupを活用してスナップショットの自動バックアップを行うためには、AWS Backupの設定変更が必要になります。これにより、一時的な管理作業が発生します。 選択肢Cは適していません。これは、スナップショットをAmazon S3バケットに保存するための追加費用、およびクロスリージョンレプリケーションの設定変更のための追加費用が発生します。 選択肢Dは適していません。リージョン間でのスナップショットのバックアップに適したLambda関数を作成するためには、これにより一時的な管理作業が発生します。 Amazon RDSにおけるディザスタリカバリーの管理の詳細については、以下のURLを参照してください。 https://aws.amazon.com/jp/blogs/database/managed-disaster-recovery-with-amazon-rds-for-sql-server-using-cross-region-automated-backups/`,
	subQuestions: [{
		id: 1,
		question: `Amazon RDS for SQL serverでは何を活用して管理型ディザスタリカバリー(DR)を行うことができますか？`,
		options: [`Amazon S3`, `AWS Backup`, `クロスリージョン自動バックアップ`, `AWS Lambda`],
		multipleAnswers: false,
		correctAnswers: [`クロスリージョン自動バックアップ`],
		explanation: `Amazon RDS for SQL serverでは、Amazon RDSのクロスリージョン自動バックアップを活用して管理型ディザスタリカバリー(DR)を行うことができます。`
	}, {
		id: 2,
		question: `RTOとRPOの意味とは何ですか？`,
		options: [`Recovery Time Objectiveは回復要素目標、Recovery Point Objectiveは回復時間目標を指す`, `Recovery Time Objectiveは回復時間目標、Recovery Point Objectiveは回復要素目標を指す`, `Recovery Time Objectiveは回復時間目標、Recovery Point Objectiveは回復時点目標を指す`, `Recovery Time Objectiveは回復要素目標、Recovery Point Objectiveは回復時点目標を指す`],
		multipleAnswers: false,
		correctAnswers: [`Recovery Time Objectiveは回復時間目標、Recovery Point Objectiveは回復時点目標を指す`],
		explanation: `Recovery Time Objective (RTO) は、システムが停止した場合に要求される回復時間を意味します。一方、Recovery Point Objective (RPO) はデータ損失容認時間を指し、停止までのデータがどの程度失われても良いかを示します。`
	}, {
		id: 3,
		question: `Amazon RDSでのクロスリージョン自動バックアップはどのような機能を有していますか？`,
		options: [`異なるリージョンでRDSスナップショットとトランザクションログの自動バックアップが可能`, `同一リージョン内でRDSスナップショットとトランザクションログの自動バックアップが可能`, `異なるリージョンでのDBインスタンスの自動生成が可能`, `異なるリージョンでのDBインスタンスの自動削除が可能`],
		multipleAnswers: false,
		correctAnswers: [`異なるリージョンでRDSスナップショットとトランザクションログの自動バックアップが可能`],
		explanation: `Amazon RDS for SQL serverのクロスリージョン自動バックアップ特徴により、異なるリージョンでRDSスナップショットとトランザクションログの自動バックアップが可能となります。`
	}, {
		id: 4,
		question: `AWS Backupを使用すると何が発生しますか？`,
		options: [`スナップショットの自動バックアップを行うためには、AWS Backupの設定変更が必要になります`, `スナップショットの自動バックアップを行うためには、AWS Lambdaの設定変更が必要になります`, `スナップショットの自動バックアップを行うためには、Amazon S3の設定変更が必要になります`, `設定変更は不要である`],
		multipleAnswers: false,
		correctAnswers: [`スナップショットの自動バックアップを行うためには、AWS Backupの設定変更が必要になります`],
		explanation: `AWS Backupを活用してスナップショットの自動バックアップを行うためには、AWS Backupの設定変更が必要になります。これにより、一時的な管理作業が発生します。`
	}, {
		id: 5,
		question: `最も費用対効果の高いディザスタリカバリー(DR)の方法は何ですか？`,
		options: [`AWS Backupを活用する`, `DBスナップショットデータをAmazon S3にエクスポートし、Amazon S3のクロスリージョンレプリケーションを活用する`, `AWS Lambda機能を活用する`, `DBインスタンスにおけるクロスリージョンの自動バックアップレプリケーションを活用する`],
		multipleAnswers: false,
		correctAnswers: [`DBインスタンスにおけるクロスリージョンの自動バックアップレプリケーションを活用する`],
		explanation: `Amazon RDS for SQL serverでは、Amazon RDSのクロスリージョン自動バックアップを活用して管理型ディザスタリカバリー(DR)を行うことができます。これは最も費用対効果の高い方法であり、管理上のオーバーヘッドも削減します。`
	}]
}, {
	id: 66,
	question: `あなたの顧客は、都市全体に数千個のセンサーを配置し、汚染に関する情報を収集するプロジェクトを計画しています。これらのセンサーから受け取るデータは、Amazon DynamoDBテーブルに効率的にキャプチャーし保存する必要があり、後に分析に使用します。これらのセンサーから送られてくるペイロードデータは、フォーマットを整え、一つのデータベーステーブルに格納する必要があります。どのような解決策を提案しますか？`,
	options: [`AWS IoT Analyticsをセンサーデータに適用し、MQTTプロトコルを用いてメッセージブローカーに送り、AWS Lambda関数を使用してフォーマットされたデータをAmazon DynamoDBテーブルに保存します。`, `AWS IoTルールを使用して、フォーマットされたデータをAmazon DynamoDBテーブルでキャプチャーし、送信します。`, `AWS IoT FleetWiseをセンサーデータに適用し、フォーマットされたデータをAmazon DynamoDBテーブルに保存します。`, `MQTTプロトコルを用いてメッセージブローカーを立ち上げ、センサーデータをAmazon SQSに保存します。その後、AWS Lambdaを使用して、Amazon SQSからメッセージを取得し、フォーマットされたデータをAmazon DynamoDBテーブルに複製します。`],
	multipleAnswers: false,
	correctAnswers: [`AWS IoTルールを使用して、フォーマットされたデータをAmazon DynamoDBテーブルでキャプチャーし、送信します。`],
	explanation: `AWS IoTルールはデバイスがAWSサービスとのやり取りを含む複数のタスクを可能にします。これらには、デバイスからのデータの拡張やフィルタリング、Amazon DynamoDBデータベースへの書き込み、Amazon S3へのファイル保存、Amazon SNSを用いて全ユーザーに通知を送信したり、Amazon SQSキューにデータを発行するなどがあります。 今回のケースでは、企業が複数のセンサーからデータを収集しDynamoDBの単一テーブルに保存したいと考えているシチュエーションに対して、AWS IoTルールを使用してセンサーからのデータをフォーマットし一つのテーブルに保存することが適切な解決策となります。 他の選択肢が不適切な理由は次の通りです。 オプションAとD（MQTTプロトコルを使用するなど）は、AWS IoTルールを使用することで、メッセージブローカーが直接Amazon DynamoDBテーブルにデータを保存することが可能となるため、これを利用する必要があります。よって、Amazon DynamoDBテーブルにデータを保存するためにAWS Lambda関数を呼び出したり、Amazon SQSにデータを保存し、その後でAWS Lambda関数を呼び出してAmazon DynamoDBテーブルにデータをコピーする必要はありません。 オプションC（AWS IoT FleetWiseを使用する）は、ほぼリアルタイムでの車両データの収集と転送に使用されます。特に上記のケースにおいては車両からのデータ収集は求められておらず、選択肢Cはこのケースには適切ではありません。`,
	subQuestions: [{
		id: 1,
		question: `Amazon DynamoDBはどのようなタイプのデータベースですか？`,
		options: [`リレーショナルデータベース`, `K-Value ストア`, `NoSQL データベース`, `データウェアハウス`],
		multipleAnswers: false,
		correctAnswers: [`NoSQL データベース`],
		explanation: `Amazon DynamoDBはフルマネージド型のNoSQL データベースサービスで、高速で任意の規模に対応するパフォーマンスを提供します。`
	}, {
		id: 2,
		question: `AWS IoTルールの主な機能は何ですか？`,
		options: [`デバイスのモニタリングと更新`, `データの収集と分析`, `デバイスからのデータの拡張やフィルタリング、他のAWSサービスへの転送`, `物理デバイスの接続とアクセスの制御`],
		multipleAnswers: false,
		correctAnswers: [`デバイスからのデータの拡張やフィルタリング、他のAWSサービスへの転送`],
		explanation: `AWS IoTルールはデバイスからのデータの拡張やフィルタリング、AWSサービスやデータベースへの書き込みなどの機能を提供します。`
	}, {
		id: 3,
		question: `AWSのどのサービスがリアルタイムでの車両データの収集と転送に使用されますか？`,
		options: [`AWS IoT Analytics`, `AWS IoT FleetWise`, `AWS IoTルール`, `Amazon SQS`],
		multipleAnswers: false,
		correctAnswers: [`AWS IoT FleetWise`],
		explanation: `AWS IoT FleetWiseは車両データの収集と転送を効率化するためのサービスです。`
	}, {
		id: 4,
		question: `フォーマットされたデータを直接Amazon DynamoDBテーブルに保存するために、どのAWSサービスを使用できますか？`,
		options: [`AWS Lambda`, `AWS IoTルール`, `Amazon SQS`, `Amazon SNS`],
		multipleAnswers: false,
		correctAnswers: [`AWS IoTルール`],
		explanation: `AWS IoTルールを使用することで、フォーマットされたデータを直接Amazon DynamoDBテーブルに保存することができます。`
	}, {
		id: 5,
		question: `メッセージブローカーを立ち上げ、センサーデータをAmazon SQSに保存し、その後でAWS Lambda関数を呼び出してAmazon DynamoDBテーブルにデータをコピーする理由は何ですか？`,
		options: [`データの効率的な管理のため`, `データのセキュリティを高めるため`, `Amazon SQSを使用するとメッセージの送受信が自動的にスケーリングされるため`, `必要ない。直接AWS IoTルールを使用してデータをDynamoDBに保存することができる`],
		multipleAnswers: false,
		correctAnswers: [`必要ない。直接AWS IoTルールを使用してデータをDynamoDBに保存することができる`],
		explanation: `AWS IoTルールを使用することで、メッセージブローカーが直接Amazon DynamoDBテーブルにデータを保存することが可能となるため、Amazon SQSにデータを保存し、その後でAWS Lambda関数を呼び出してAmazon DynamoDBテーブルにデータをコピーする必要はありません。`
	}]
}, {
	id: 67,
	question: `交通管理局は、都心の主要通交差点の連続的な映像を取得し保存し、将来の分析のために利用するよい新しいプロジェクトを計画しています。取得された映像は既存のサードパーティ製のプレーヤーと互換性が必要であり、さらに一部のユーザーは携帯電話のブラウザでこれらの映像を視聴します。AWSアーキテクトとして、サードパーティ製のプレーヤーやモバイルフオンのブラウザで直接映像を視聴可能なソリューションを設計する任務が与えられました。 この要件を満たすためのソリューションは何でしょうか？`,
	options: [`AWS Elemental MediaLiveを使用してストリーミングするライブビデオのURLを取得します。このURLをサードパーティのプレーヤーやモバイルフォンのブラウザでライブビデオをストリームします。`, `Kinesis Video Streamsを使用し、GetDASHStreamingSessionURL APIを用いてストリーミングセッションを作成します。このセッションで生成されるURLをサードパーティのプレーヤーやモバイルフォンのブラウザでライブビデオをストリームします。`, `Kinesis Video Streamsを使用し、GetHLSStreamingSessionURL APIを用いてストリーミングセッションを作成します。このセッションで生成されるURLをサードパーティのプレーヤーやモバイルフォンのブラウザでライブビデオをストリームします。`, `Amazon Elastic Transcoderを使用してストリーミングするライブビデオのURLを取得します。このURLをサードパーティのプレーヤーやモバイルフォンのブラウザでライブビデオをストリームします。`],
	multipleAnswers: false,
	correctAnswers: [`Kinesis Video Streamsを使用し、GetHLSStreamingSessionURL APIを用いてストリーミングセッションを作成します。このセッションで生成されるURLをサードパーティのプレーヤーやモバイルフォンのブラウザでライブビデオをストリームします。`],
	explanation: `正解：Kinesis Video Streamsを使用し、GetHLSStreamingSessionURL APIを用いてストリーミングセッションを作成します。このセッションで生成されるURLを、サードパーティのプレーヤーやモバイルフォンのブラウザでライブビデオをストリームします。 Kinesis Video Streamsは、複数のライブビデオをストリーミングするための完全にマネージド型のビデオストリーミングサービスです。これにより、分析、保存、サードパーティプレーヤーでの再生などを目的としたストリーミングビデオを取得できます。Kinesis Video Streamsは、GetDASHStreamingSessionURL APIとGetHLSStreamingSessionURL APIをサポートしています。このうち、モバイルフォンのブラウザで視聴するためにはGetHLSStreamingSessionURL APIを使用する必要があります。 選択肢AのAWS Elemental MediaLiveは、テレビ放送やインターネット接続デバイス向けの高品質なストリームを作成できますが、多数のストリームを一つの出力にするための適切な選択肢ではありません。 選択肢BのKinesis Video StreamsのGetDASHStreamingSessionURL APIは、メディアプレーヤーのURLをストリーミング可能にしますが、モバイルフォンのブラウザでは使用することは出来ません。 選択肢DのAmazon Elastic Transcoderは、ソースメディアファイルを、視聴端末デバイスで再生可能な形式に変換できますが、ライブビデオのストリーミングには適していません。`,
	subQuestions: [{
		id: 1,
		question: `AWSのビデオストリーミングサービスの一つは何でしょうか？`,
		options: [`Amazon Kinesis Video Streams`, `Amazon VideoStreams`, `AWS VideoStream Elemental`, `Amazon Elastic VideoStream`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Kinesis Video Streams`],
		explanation: `正しくはAmazon Kinesis Video Streamsです。これは、複数のライブビデオをストリーミングするための完全にマネージド型のビデオストリーミングサービスです。`
	}, {
		id: 2,
		question: `サードパーティプレーヤーやモバイルフォンのブラウザでストリーミングを観るために、Kinesis Video Streamsが提供するAPIの一つは何でしょうか？`,
		options: [`GetVideoStreamingURL`, `CreateStreamingSessionURL`, `GetDASHStreamingSessionURL`, `GetHLSStreamingSessionURL`],
		multipleAnswers: false,
		correctAnswers: [`GetHLSStreamingSessionURL`],
		explanation: `正解はGetHLSStreamingSessionURLです。Kinesis Video Streamsは、GetDASHStreamingSessionURL APIとGetHLSStreamingSessionURL APIをサポートしています。モバイルフォンのブラウザで視聴するためにはGetHLSStreamingSessionURL APIを使用する必要があります。`
	}, {
		id: 3,
		question: `Amazon Elemental MediaLiveは何をするためのサービスでしょうか？`,
		options: [`テレビ放送やインターネット接続デバイス向けの高品質なストリームを作成`, `複数のライブビデオをストリーミング`, `ソースメディアファイルを視聴端末デバイスで再生可能な形式に変換`, `サードパーティ製のプレーヤーやモバイルフォンのブラウザで直接映像を視聴`],
		multipleAnswers: false,
		correctAnswers: [`テレビ放送やインターネット接続デバイス向けの高品質なストリームを作成`],
		explanation: `正解はテレビ放送やインターネット接続デバイス向けの高品質なストリームを作成です。AWS Elemental MediaLiveはライブストリーミングコンテンツを高品質で作成し、配信するためのサービスです。`
	}, {
		id: 4,
		question: `Amazon Elastic Transcoderは何をするためのサービスでしょうか？`,
		options: [`テレビ放送やインターネット接続デバイス向けの高品質なストリームを作成`, `複数のライブビデオをストリーミング`, `ソースメディアファイルを視聴端末デバイスで再生可能な形式に変換`, `サードパーティ製のプレーヤーやモバイルフォンのブラウザで直接映像を視聴`],
		multipleAnswers: false,
		correctAnswers: [`ソースメディアファイルを視聴端末デバイスで再生可能な形式に変換`],
		explanation: `正解はソースメディアファイルを視聴端末デバイスで再生可能な形式に変換です。Amazon Elastic Transcoderはクラウド内でメディアファイルを変換するAWSサービスで、視聴端末デバイスで再生可能な形式に変換します。`
	}, {
		id: 5,
		question: `Kinesis Video StreamsのGetDASHStreamingSessionURLはどのような状況で使用できますか？`,
		options: [`メディアプレーヤーのURLをストリーミング可能にする`, `モバイルフォンのブラウザで視聴する`, `メディアプレーヤーのURLをストリーミング可能にし、モバイルフォンのブラウザで視聴する`, `すべてのメディアプレーヤーとモバイルフォンのブラウザでストリーミングする`],
		multipleAnswers: false,
		correctAnswers: [`メディアプレーヤーのURLをストリーミング可能にする`],
		explanation: `正解はメディアプレーヤーのURLをストリーミング可能にします。GetDASHStreamingSessionURL APIはメディアプレーヤーのURLをストリーミング可能にしますが、モバイルフォンのブラウザでは使用できません。`
	}]
}, {
	id: 68,
	question: `ウェブアプリケーションがAmazon EC2インスタンスとネットワークロードバランサー(NLB)を活用して展開されており、金融トランザクションの支援にはAmazon EC2インスタンスに設定されたTLS証明書を用いたエンドツーエンドの暗号化が必要です。最近、品質管理チームからアプリケーションパフォーマンスの低下についての報告があり、詳細な調査の結果、Amazon EC2インスタンスのCPU使用率が常時80%以上となっていることが明らかになりました。IT部署のマネージャは、アプリケーションの需要が急増しても適切なパフォーマンスを維持できる解決策の提供を求めています。現状の設置の変更を最小限に抑えつつ、アプリケーションのパフォーマンスを改善するために、どのようにアプリケーションを改善すべきでしょうか？`,
	options: [`A. Amazon EC2インスタンスの代わりにAWS CloudHSMに設定されたTLS証明書を利用し、TLSオフローディングを適用します`, `B. ネットワークロードバランサーの前段にAmazon CloudFrontを設定し、AWS証明書マネージャーに保存されているTLS証明書を使用します`, `C. ネットワークロードバランサーとAmazon EC2インスタンス間のTLS再交渉を設定します`, `D. ネットワークロードバランサーにポート443でTLSリスナーを設定します`],
	multipleAnswers: false,
	correctAnswers: [`D. ネットワークロードバランサーにポート443でTLSリスナーを設定します`],
	explanation: `ネットワークロードバランサーはTLS（Transport Layer Security）トラフィックを扱うことができ、TCPまたはTLSを介してターゲットインスタンスとの接続を確立します。Amazon EC2インスタンス上でトラフィックの暗号化と復号化を行うと、計算リソースを大量に消費し、CPU使用率を高め、パフォーマンスが低下する可能性があります。ネットワークロードバランサーにTLSリスナーを設定することで、暗号化と復号化はネットワークロードバランサーによって行われ、低遅延を実現しながら大量のトラフィックを処理することが可能となります。 選択肢AのAWS CloudHSMを使用するとコストが大幅に増加し、TLS証明書の管理をCloudHSMで行う必要があるため実現性が低いです。 選択肢Bでは、Amazon CloudFrontとAWS証明書マネージャーの追加設定が必要となり、現在の設置の大幅な変更が必要となるため、適切な解決策ではありません。 選択肢Cのネットワークロードバランサー上でのTLS再交渉はサポートされていないため、これはAmazon EC2インスタンスの負荷を軽減することはできません。`,
	subQuestions: [{
		id: 1,
		question: `Amazon EC2インスタンスのCPU使用率が常時80%以上になる原因は何ですか？`,
		options: [`大量のトラフィック処理`, `応答時間の遅延`, `データベースの処理負荷`, `暗号化と復号化の処理`],
		multipleAnswers: false,
		correctAnswers: [`暗号化と復号化の処理`],
		explanation: `Amazon EC2インスタンス上でトラフィックの暗号化と復号化を行うと、計算リソースを大量に消費し、CPU使用率を高め、パフォーマンスが低下する可能性があります。`
	}, {
		id: 2,
		question: `ネットワークロードバランサーに設定することでパフォーマンスを改善するのは何ですか？`,
		options: [`ポート443でTLSリスナー`, `ポート80でHTTPリスナー`, `複数のターゲットグループ`, `IPv6のサポート`],
		multipleAnswers: false,
		correctAnswers: [`ポート443でTLSリスナー`],
		explanation: `ネットワークロードバランサーにTLSリスナーを設定することで、暗号化と復号化はネットワークロードバランサーによって行われ、低遅延を実現しながら大量のトラフィックを処理することが可能となります。`
	}, {
		id: 3,
		question: `AWS CloudHSMを使用することで、Amazon EC2インスタンスのCPU使用率を下げることは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `選択肢AのAWS CloudHSMを使用するとコストが大幅に増加し、TLS証明書の管理をCloudHSMで行う必要があるため実現性が低いです。`
	}, {
		id: 4,
		question: `Amazon CloudFrontとAWS証明書マネージャーの追加設定を行うことでパフォーマンスを改善することは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `選択肢Bでは、Amazon CloudFrontとAWS証明書マネージャーの追加設定が必要となり、現在の設置の大幅な変更が必要となるため、適切な解決策ではありません。`
	}, {
		id: 5,
		question: `ネットワークロードバランサー上でのTLS再交渉を設定することでパフォーマンスを改善することは可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `選択肢Cのネットワークロードバランサー上でのTLS再交渉はサポートされていないため、これはAmazon EC2インスタンスの負荷を軽減することはできません。`
	}]
}, {
	id: 69,
	question: `開発チームが新たなアプリケーションを作り上げました。このアプリケーションはAmazon S3、Amazon Event Bridge、外部APIデスティネーションの３つを用いています。アプリケーションのユーザーは、数千もの画像をAmazon S3のバケットに保存しています。Amazon EventBridgeは外部APIエンドポイントに対してAmazon S3で発生したイベントをルーティングする役割を果たしています。しかし、その取扱量により外部APIエンドポイントへのイベント転送が思わしくない遅延を引き起こしています。オペレーションヘッドは、この問題を解決するために遅延を避けつつ、全てのイベントを堅牢に保管する方法を探しています。そのために彼が提案しうるアクションの組み合わせの中には何が含まれるでしょうか？`,
	options: [`APIデスティネーションに対する呼び出しタイムアウトを設定します`, `APIデスティネーションの接続リミットを設定します`, `イベントバス内でデッドレターキューを作成し、後続処理のためにイベントをAmazon SNSに保存します`, `APIデスティネーションの制限を設定します`, `イベントバス内でデッドレターキューを作成し、後続処理のためにイベントをAmazon SQSに保存します`],
	multipleAnswers: true,
	correctAnswers: [`APIデスティネーションに対する呼び出しタイムアウトを設定します`, `イベントバス内でデッドレターキューを作成し、後続処理のためにイベントをAmazon SQSに保存します`],
	explanation: `呼び出しは特定のイベントがルールに一致したときに発生し、そのイベントはターゲットへと順次送られます。あるリージョンでクオータが達成された時、Amazon EventBridgeはターゲットへとイベントの転送を遅延させます。このクオータには、例えば米国西部地域では1秒あたり18,750リクエストに設定されているようなソフトリミットが含まれています。このソフトリミットはリージョンによって異なり、その詳細はAWSのドキュメントで確認できます。今回の状況では、取扱量が上昇したために、呼び出しクオータが外部APIエンドポイントへとイベントを転送する際に遅延を起こすと思われます。クオータに達してしまう事態を防ぐために、デスティネーションに対する呼び出しレートの制限を設定することができます。そうすることで、突然のトラフィックの増加を防いで制限を越える任意のトラフィックがEventBridgeにキューイングされ、それがレート制限内で後に転送されるようになります。配信に失敗したイベントを保存するために、イベントバス上でデッドレターキューを設定し、メッセージをAmazon SQSに保存して後続の処理を行います。オプション2は誤答です。その理由は、接続はAPIデスティネーションと共に用いられ、それはHTTPエンドポイントへの接続に活用される認証パラメータを定義します。ですので、これを制限したとしても遅延の原因となる接続には影響がないため、遅延の問題を解決することはできません。オプション3もまた誤答です。その理由は、イベントはAmazon SNSではなく、Amazon SQSに保存すべきだからです。そしてオプション4も同様に誤答です。その理由は、APIデスティネーションの制限とは、Amazon EventBridgeがイベントを転送する外部APIエンドポイントの数を指すもので、これを設定したとしても遅延の原因となる外部APIエンドポイントには影響を及ぼさないため、遅延の解消には繋がりません。`,
	subQuestions: [{
		id: 1,
		question: `Amazon S3のイベントを外部APIエンドポイントに転送する際、遅延が気になる場合、どのような設定をするべきか？`,
		options: [`APIデスティネーションの制限を設定する`, `APIデスティネーションに対する呼び出しタイムアウトを設定する`, `APIデスティネーションの接続リミットを設定する`, `全て間違い`],
		multipleAnswers: false,
		correctAnswers: [`APIデスティネーションに対する呼び出しタイムアウトを設定する`],
		explanation: `クオータに達してしまう事態を防ぐために、デスティネーションに対する呼び出しレートの制限を設定することができます。そうすることで、突然のトラフィックの増加を防いで制限を越える任意のトラフィックがEventBridgeにキューイングされ、それがレート制限内で後に転送されるようになります。`
	}, {
		id: 2,
		question: `Amazon EventBridgeで、配信に失敗したイベントを保存するために設定するべきことは何か？`,
		options: [`APIデスティネーションに対する呼び出しタイムアウトを設定する`, `APIデスティネーションの接続リミットを設定する`, `イベントバス内でデッドレターキューを作成し、後続処理のためにイベントをAmazon SQSに保存する`, `全て間違い`],
		multipleAnswers: false,
		correctAnswers: [`イベントバス内でデッドレターキューを作成し、後続処理のためにイベントをAmazon SQSに保存する`],
		explanation: `イベントバス上でデッドレターキューを設定し、メッセージをAmazon SQSに保存して後続の処理を行います。オプション3もまた誤答です。その理由は、イベントはAmazon SNSではなく、Amazon SQSに保存すべきだからです。`
	}, {
		id: 3,
		question: `アプリケーションのユーザーが数千もの画像をAmazon S3のバケットに保存している。この画像はどこで管理されるべきか？`,
		options: [`Amazon SQS`, `Amazon SNS`, `Amazon S3のバケット`, `全て間違い`],
		multipleAnswers: false,
		correctAnswers: [`Amazon S3のバケット`],
		explanation: `アプリケーションのユーザーが数千もの画像を保存する場合、Amazon S3のバケットが最も適しています。これはAmazon S3が大量のデータを保存し管理するのに適したサービスであるからです。`
	}, {
		id: 4,
		question: `Amazon EventBridgeとAPIデスティネーションを連携して利用する際に必要な操作はどれか？`,
		options: [`APIデスティネーションの制限を設定する`, `APIデスティネーションに対する呼び出しタイムアウトを設定する`, `APIデスティネーションの接続リミットを設定する`, `全て正しい`],
		multipleAnswers: false,
		correctAnswers: [`APIデスティネーションに対する呼び出しタイムアウトを設定する`],
		explanation: `Amazon EventBridgeとAPIデスティネーションを連携して利用する際には、APIデスティネーションに対する呼び出しタイムアウトを設定することが重要です。これにより、任意のトラフィックがEventBridgeにキューイングされ、それがレート制限内で後に転送されるようになります。`
	}, {
		id: 5,
		question: `デッドレターキューに保存すべきイベントの種類はどれか？`,
		options: [`配信に成功したイベント`, `配信に失敗したイベント`, `APIデスティネーションが応答を返さないイベント`, `全て間違い`],
		multipleAnswers: false,
		correctAnswers: [`配信に失敗したイベント`],
		explanation: `配信に失敗したイベントを保存するために、イベントバス上でデッドレターキューを設定し、メッセージをAmazon SQSに保存して後続の処理を行います。`
	}]
}, {
	id: 70,
	question: `あるエンジニアリング企業では、AWS Elastic Beanstalkを利用してウェブアプリケーションを運用しており、それにAmazon Cognitoにカスタムドメインのユーザープールを設定しています。オペレーションチームは、監査結果に基づき、全てのACM証明書の更新と既存の証明書の削除を決定しました。だが、証明書の一部を削除しようとしたところ、「証明書が他のAWSリソースと関連付けられており、削除できません。関連付けを外してから再度削除を行ってください。」というエラーメッセージが表示されました。彼らはこの証明書削除の問題に対してどのように対処すべきかをあなたに助言を求めてきました。どのような提案を行いますか？`,
	options: [`既存のACM証明書とアプリケーションロードバランサとの関連付けを解除し、Amazon Cognitoのカスタムドメインに関連したACM証明書を更新する`, `既存のACM証明書とCloudFrontディストリビューションとの関連付けを解除し、Amazon Cognitoのカスタムドメインに関連したACM証明書を更新する`, `既存のACM証明書とAPI Gatewayとの関連付けを解除し、Amazon Cognitoのカスタムドメインに関連したACM証明書を更新する`, `既存のACM証明書とAWS Elastic Beanstalkとの関連付けを解除し、Amazon Cognitoのカスタムドメインに関連したACM証明書を更新する`],
	multipleAnswers: false,
	correctAnswers: [`既存のACM証明書とCloudFrontディストリビューションとの関連付けを解除し、Amazon Cognitoのカスタムドメインに関連したACM証明書を更新する`],
	explanation: `ACM証明書を削除する前には、その証明書がAWSリソースとの関連付けを全て解除する必要があります。Amazon Cognitoのユーザープールにカスタムドメインを設定すると、その証明書を使用したCloudFrontディストリビューションが作成されます。このCloudFrontディストリビューションはAmazon Cognitoが所有しており、個別のアカウントではないため、関連する証明書の削除には次の2つの手順が必要です。1.CloudFrontディストリビューションから証明書の関連を解除する。Amazon Cognitoのカスタムドメインに関連づけられたACM証明書を更新することで、元のACM証明書を削除できます。2.AWSの公式ドキュメントを確認する。正確な情報や手順についてはいつでもAWSの公式ドキュメントを参照することを推奨します。公式ドキュメントURL：https://aws.amazon.com/premiumsupport/knowledge-center/acm-certificate-resources/とhttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.htmlの2つが参照できます。`,
	subQuestions: [{
		id: 1,
		question: `AWS Elastic Beanstalkは何を用途とするサービスですか？`,
		options: [`マネージド型のウェブアプリケーションデプロイメントと運用サービス`, `データ分析のための高速、フルマネージド型のビジネスインテリジェンスサービス`, `セキュリティチームにセキュリティアラートとセキュリティ状態の可視化を提供するサービス`, `顔認証や画像分析に使用するAIサービス`],
		multipleAnswers: false,
		correctAnswers: [`マネージド型のウェブアプリケーションデプロイメントと運用サービス`],
		explanation: `AWS Elastic Beanstalkは、アプリケーションの展開と運用を簡単にし、インフラストラクチャのセットアップ、ネットワーキング、セキュリティの詳細から解放して、開発者がコードに集中できるように設計されたマネージド型の運用環境です。`
	}, {
		id: 2,
		question: `Amazon Cognito User Poolsのカスタムドメイン設定に関して正しい説明はどれですか？`,
		options: [`ACM証明書と紐付くELBのアドレスを指定する`, `ACM証明書と紐付くCloudFrontのアドレスを指定する`, `ACM証明書と紐付くElastiCacheのアドレスを指定する`, `ACM証明書と紐付くRDSのアドレスを指定する`],
		multipleAnswers: false,
		correctAnswers: [`ACM証明書と紐付くCloudFrontのアドレスを指定する`],
		explanation: `Amazon Cognito User Poolsのカスタムドメイン設定ではACM証明書と紐付くCloudFrontのアドレスを指定します。これにより、セキュリティ性が確保された認証ページへのアクセスが可能となります。`
	}, {
		id: 3,
		question: `AWS Certificate Manager (ACM)で証明書を削除する前に必要な手順は何ですか？`,
		options: [`ACM証明書と紐づいているリソースとの関連を全て解除する`, `ACM証明書を別のリージョンにコピーする`, `ACM証明書をIAMにインポートする`, `ACM証明書のエクスポートを行う`],
		multipleAnswers: false,
		correctAnswers: [`ACM証明書と紐づいているリソースとの関連を全て解除する`],
		explanation: `ACM証明書を削除する前には、その証明書が他のAWSリソースとの関連付けを全て解除する必要があります。もし証明書が他のリソースと関連付けられている状態で削除しようとすると、エラーメッセージが表示されます。`
	}, {
		id: 4,
		question: `Amazon Cognitoのカスタムドメインを設定した際、どのAWSサービスが自動的に作成・関連付けされますか？`,
		options: [`Amazon EC2`, `Amazon RDS`, `AWS Lambda`, `Amazon CloudFront`],
		multipleAnswers: false,
		correctAnswers: [`Amazon CloudFront`],
		explanation: `Amazon Cognitoのユーザープールにカスタムドメインを設定すると、その証明書を使用したAmazon CloudFrontディストリビューションが自動的に作成されます。これにより、セキュリティ性が確保された認証ページへのアクセスが可能になります。`
	}, {
		id: 5,
		question: `Amazon CognitoのカスタムドメインにおけるACM証明書の更新について正しい説明はどれですか？`,
		options: [`新しいACM証明書を発行し、それをUser Poolに直接設定する`, `新しいACM証明書を発行し、それをCloudFrontディストリビューションに設定する`, `新しいACM証明書を発行し、それをAWS Elastic Beanstalkに設定する`, `新しいACM証明書を発行し、それを既存のACM証明書に上書きする`],
		multipleAnswers: false,
		correctAnswers: [`新しいACM証明書を発行し、それをUser Poolに直接設定する`],
		explanation: `ACM証明書の更新は、新しい証明書を取得してそれをCognito User Poolに直接設定することで行います。User Poolのカスタムドメイン設定で新しい証明書を指定することにより、CloudFrontディストリビューションの証明書も自動的に更新され、セキュリティを維持しつつ証明書の更新が可能となります。`
	}]
}, {
	id: 71,
	question: `ある取引連携組織がAmazon Managed BlockchainとHyperledger Fabricフレームワークを用いたプライベートブロックチェーンネットワークを構築しました。このネットワークの参加メンバーには複数のAWSアカウントが存在します。それぞれのアカウントにはVPCプライベートエンドポイントが設けられており、全てのメンバーからブロックチェーンリソースへのアクセスが可能です。この組織は新たにディストリビューターと提携することになり、新たなディストリビューターもこのネットワークに参加することが求められています。ディストリビューターは、このネットワークにスムーズに加わり、Hyperledger Fabricのリソースにアクセスできる必要があります。これらの要件を満たすためにソリューションアーキテクトが着手すべき手順の組み合わせは何でしょう？（2つ選んでください）`,
	options: [`他のAWSアカウントをブロックチェーンネットワークへの参加のために招待する提案を作成します。提案がネットワークの管理者によって承認されたら、他のAWSアカウントは招待状を受け取ります`, `全ての既存メンバーのVPCから新しいアカウントのVPCへ新たなVPC PrivateLinkエンドポイントを作成し、Hyperledger Fabricリソースへのアクセスを可能にします`, `全てのメンバーに対して、正確にHyperledger FabricのリソースにアクセスできるようAWSアカウントから単一のVPC PrivateLinkエンドポイントを作成します`, `Hyperledger Fabricのリソースにアクセスするために、全てのメンバーに対してAWSアカウントから複数のVPC PrivateLinkエンドポイントを作成します`, `他のAWSアカウントをブロックチェーンネットワークに参加するための提案を作成します。提案がネットワークの既存メンバーによって承認されたら、他のAWSアカウントは適切な招待状を受け取ります`],
	multipleAnswers: true,
	correctAnswers: [`全てのメンバーに対して、正確にHyperledger FabricのリソースにアクセスできるようAWSアカウントから単一のVPC PrivateLinkエンドポイントを作成します`, `他のAWSアカウントをブロックチェーンネットワークに参加するための提案を作成します。提案がネットワークの既存メンバーによって承認されたら、他のAWSアカウントは適切な招待状を受け取ります`],
	explanation: `Amazon Managed Blockchainは、公開したいネットワークに簡単に参加させるため、またはスケール可能なプライベートネットワークを構築・管理するために利用可能なフルマネージド型のサービスです。このサービスはHyperledger FabricやEthereumなどのオープンソースフレームワークをサポートしています。 Amazon Managed Blockchainネットワークでは、ネットワーク内の各AWSアカウントがメンバーとしてすべてのリソースに対等に所有権を有しており、各メンバーアカウントの投票ルールはネットワーク作成時に設定されます。ブロックチェーンネットワークに新しいメンバーを導入するためには、まず提案を作成し、その提案が既存のメンバーアカウント全体からの投票を通過する必要があります。その結果として、新たなアカウントへの参加招待が送られます。Amazon Managed Blockchainでは、Hyperledger Fabricのリソースに接続するためのエンドポイントが提供され、これらのエンドポイントへの接続にはアカウント内でVPC Privatelinkエンドポイントを作成する必要があります。各AWSアカウントが複数のメンバーを持つ場合でも、単一のVPC PrivateLinkエンドポイントを作成するだけで十分です。 選択肢Aは不正解です。Amazon Managed Blockchainネットワークでは、治理は参加した全メンバー間で共有されています。新しいアカウントをネットワークに追加するためには、全既存メンバーが最初に設定した投票ルールに応じて承認する必要があります。 選択肢Bも不正解です。全ての現存メンバーから新たなアカウントへVPC PrivateLinkエンドポイントを作成する必要はありません。ネットワークアクセスが必要なアカウントからVPC PrivateLinkエンドポイントを作成することが必要です。 選択肢Dも不正解です。AWSアカウントが複数のメンバーを持つ場合でも、単一のVPN PrivateLinkエンドポイントを作成するだけで十分です。`,
	subQuestions: [{
		id: 1,
		question: `Hyperledger Fabricリソースに接続するために必要なエンドポイントの提供を誰が実施しているでしょうか？`,
		options: [`全ての既存メンバー`, `新たなディストリビューター`, `Amazon Managed Blockchain`, `ブロックチェーンネットワークの管理者`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Managed Blockchain`],
		explanation: `Amazon Managed Blockchainでは、Hyperledger Fabricのリソースに接続するためのエンドポイントが提供されます。接続するためにはアカウント内でVPC Privatelinkエンドポイントを作成する必要があります。`
	}, {
		id: 2,
		question: `新しいメンバーをブロックチェーンネットワークに導入する際に、投票ルールは何時に設定されるでしょうか？`,
		options: [`ブロックチェーンネットワーク作成時`, `新しいメンバーを導入する時`, `提案を作成する時`, `ネットワークの管理者によって任意のタイミングで`],
		multipleAnswers: false,
		correctAnswers: [`ブロックチェーンネットワーク作成時`],
		explanation: `Amazon Managed Blockchainネットワークでは、各メンバーアカウントの投票ルールはネットワーク作成時に設定されます。ブロックチェーンネットワークに新しいメンバーを導入するためには、先ず提案を作成し、それが既存のメンバーアカウント全体からの投票を通過する必要があります。`
	}, {
		id: 3,
		question: `新しいメンバーをブロックチェーンネットワークに導入する際、どのアカウントからVPC PrivateLinkエンドポイントを作成する必要がありますか？`,
		options: [`全ての既存メンバー`, `新たなディストリビューター`, `Amazon Managed Blockchain`, `ブロックチェーンネットワークの管理者`],
		multipleAnswers: false,
		correctAnswers: [`新たなディストリビューター`],
		explanation: `Amazon Managed Blockchainでは、アカウントからVPC Privatelinkエンドポイントを作成する必要があります。特に、ネットワークアクセスが必要なアカウントからVPC PrivateLinkエンドポイントを作成することが必要です。`
	}, {
		id: 4,
		question: `新しいメンバーをブロックチェーンネットワークに導入するためには、何を作成し、それがどこを通過する必要がありますか？`,
		options: [`提案、既存のメンバーアカウント全体からの投票`, `招待状、ネットワークの管理者からの承認`, `アカウント、既存のメンバーアカウント全体`, `リソース、新たなメンバーアカウントからの承認`],
		multipleAnswers: false,
		correctAnswers: [`提案、既存のメンバーアカウント全体からの投票`],
		explanation: `Amazon Managed Blockchainネットワークに新しいメンバーを導入するためには、先ず提案を作成し、その提案が既存のメンバーアカウント全体からの投票を通過する必要があります。その結果として、新たなアカウントへの参加招待が送られます。`
	}, {
		id: 5,
		question: `AWSアカウントが複数のメンバーを持つ場合、何を作成することが必要ですか？`,
		options: [`複数のVPC PrivateLinkエンドポイント`, `全てのメンバーから新たなアカウントへVPC PrivateLinkエンドポイント`, `単一のVPC PrivateLinkエンドポイント`, `新たなメンバーへVPC PrivateLinkエンドポイント`],
		multipleAnswers: false,
		correctAnswers: [`単一のVPC PrivateLinkエンドポイント`],
		explanation: `AWSアカウントが複数のメンバーを持つ場合でも、単一のVPN PrivateLinkエンドポイントを作成するだけで十分です。全ての現存メンバーから新たなアカウントへVPC PrivateLinkエンドポイントを作成する必要はありません。`
	}]
}, {
	id: 72,
	question: `ある企業が自社のオンプレミス環境でWindows OSを使用してアプリケーションサーバを運用しています。そのサーバの低コストな災害復旧策をAWSクラウドで見つけることを計画しています。求められるRPOは秒単位、RTOは分単位です。そして、AWSクラウド上でのリカバリインスタンスの管理には標準的なAmazon EC2ローンチテンプレートが要求されます。これらの要件を満たす解決策は何でしょうか？`,
	options: [`AWSの転送ファミリーを活用し、オンプレミスのアプリケーションサーバからAWSにデータを自動コピーします。災害発生時には、AWS上でEC2インスタンスを立ち上げます。`, `AWSバックアップを導入し、オンプレミスのアプリケーションサーバからAWSにデータを自動コピーします。災害発生時には、AWS上でEC2インスタンスを立ち上げます。`, `オンプレミスに設置されたアプリケーションサーバにCloudEndure Disaster Recoveryを導入します。`, `オンプレミスのアプリケーションサーバにAWS Elastic Disaster Recovery (AWS DRS)を実装します。`],
	multipleAnswers: false,
	correctAnswers: [`オンプレミスのアプリケーションサーバにAWS Elastic Disaster Recovery (AWS DRS)を実装します。`],
	explanation: `AWS Elastic Disaster Recovery (AWS DRS)は、AWSでアプリケーション回復を実現するためのコストパフォーマンスに優れたスケーラブルな手段です。AWS DRSは、少量のストレージとコンピューティングリソースを使用し、AWSリソースに対するデータレプリケーションを開始します。障害発生時、AWSクラウドでリカバリインスタンスを起動し、特定の時点のサーバーの状態を使用してアプリケーションを回復します。これによりRPOを秒単位、RTOを分単位で達成することが可能です。また、リカバリインスタンスの起動に際して、AWS DRSさんは標準のEC2ローンチテンプレートの利用をサポートしています。選択肢Aは不適切で、AWS転送ファミリーはファイル転送のためのFTP/SFTPプロトコルを使用できますが、災害復旧ツールとしては不適切です。選択肢Bも不適切で、AWSバックアップを使用しても低いRPOとRTOの目標を達成できません。選択肢Cも不適切で、CloudEndure Disaster Recoveryは標準的なAmazon EC2インスタンスローンチテンプレートの使用をリカバリインスタンスの制御にはサポートしていません。AWS DRSの詳細については、下記のURLをご参照ください。https://aws.amazon.com/disaster-recovery/faqs/?nc=sn&loc=4`,
	subQuestions: [{
		id: 1,
		question: `AWS Elastic Disaster Recovery (AWS DRS)の主な利点は何ですか？`,
		options: [`アプリケーション回復を実現するコストパフォーマンスに優れた手段であること`, `オンプレミス環境を完全に破壊すること`, `大量のストレージとコンピューティングリソースを必要とすること`, `特定の時点のサーバー状態を使用せずにアプリケーションを回復すること`],
		multipleAnswers: false,
		correctAnswers: [`アプリケーション回復を実現するコストパフォーマンスに優れた手段であること`],
		explanation: `AWS Elastic Disaster Recovery (AWS DRS)は、AWSでアプリケーション回復を実現するためのコストパフォーマンスに優れた手段です。少量のストレージとコンピューティングリソースを使用し、障害発生時には特定の時点のサーバー状態を使用してアプリケーションを回復します。`
	}, {
		id: 2,
		question: `AWS Elastic Disaster Recovery (AWS DRS)がRPOとRTOをどの単位で達成するかは？`,
		options: [`RPOは分単位、RTOは日単位`, `RPOは日単位、RTOは秒単位`, `RPOは分単位、RTOは時間単位`, `RPOは秒単位、RTOは分単位`],
		multipleAnswers: false,
		correctAnswers: [`RPOは秒単位、RTOは分単位`],
		explanation: `AWS Elastic Disaster Recovery (AWS DRS)により、RPO (Recovery Point Objective)を秒単位、RTO (Recovery Time Objective)を分単位で達成することが可能です。これは、AWS DRSがデータレプリケーションを即時に開始し、障害発生時には速やかにリカバリインスタンスを起動できるためです。`
	}, {
		id: 3,
		question: `AWS Elastic Disaster Recovery (AWS DRS)がリカバリインスタンスの起動に使用するものは何ですか？`,
		options: [`標準的なAmazon EC2インスタンス`, `カスタムAmazon EC2インスタンス`, `標準的なAmazon EC2ローンチテンプレート`, `カスタムAmazon EC2ローンチテンプレート`],
		multipleAnswers: false,
		correctAnswers: [`標準的なAmazon EC2ローンチテンプレート`],
		explanation: `AWS Elastic Disaster Recovery (AWS DRS)は、リカバリインスタンスの起動に際して、標準的なAmazon EC2ローンチテンプレートの利用をサポートしています。これにより、AWSリソースのライフサイクル管理が容易になります。`
	}, {
		id: 4,
		question: `AWS転送ファミリーはどのような目的で使用されますか？`,
		options: [`アプリケーションサーバからAWSにデータを自動コピーするため`, `ファイル転送のためのFTP/SFTPプロトコルを使用するため`, `AWSの各種サービス間でデータ転送を行うため`, `災害復旧を実現するため`],
		multipleAnswers: false,
		correctAnswers: [`ファイル転送のためのFTP/SFTPプロトコルを使用するため`],
		explanation: `AWS転送ファミリーは主にファイルの転送のために利用されます。ファイル転送プロトコルのFTP/SFTPを使用可能で、独自のファイル転送ソリューションを持つ企業にとって有用です。しかし、災害復旧ツールとして使用するのは不適切です。`
	}, {
		id: 5,
		question: `AWSバックアップを使用すると、どの程度のRPOとRTOを達成できますか？`,
		options: [`RPOを秒単位、RTOを分単位で達成できる`, `RPOを分単位、RTOを時間単位で達成できる`, `RPOを時間単位、RTOを日単位で達成できる`, `RPOとRTOの目標を達成できない`],
		multipleAnswers: false,
		correctAnswers: [`RPOとRTOの目標を達成できない`],
		explanation: `AWSバックアップは、AWSリソースのバックアップと復元を簡単に行うことができるサービスです。しかし、AWSバックアップを用いても、RPOとRTOの目標を低い値で達成することは難しいです。そのため、RPOを秒単位、RTOを分単位で達成する必要がある場合には、AWS Elastic Disaster Recovery (AWS DRS)のような他のサービスを検討するべきです。`
	}]
}, {
	id: 73,
	question: `通信業者がAWS Wavelengthゾーンを利用した新規アプリケーション開発を行っています。 このアプリケーションは、1つのVPC Aに所属し、Wavelengthゾーン1と2に配置されたAmazon EC2インスタンス上にデプロイされています。Amazon EC2インスタンスは、親VPCやインターネットと通信可能です。Wavelengthゾーン1と2間のアプリケーションの同期トラフィックを行うために、Amazon EC2インスタンス間の接続が必要になります。インスタンスは、それぞれのWavelengthゾーンから通信可能な範囲できめ細かい制御と共に接続を確立する必要があります。 この追加の接続要求を満たすための適切な解決策は何でしょうか？`,
	options: [`新規にVPC Bを作成します。存在するVPC AについてはそのサブネットをWavelengthゾーン1に関連付けます。VPC Bの内部でサブネットを作成し、それをWavelengthゾーン2に関連付けます。Wavelengthゾーン1とWavelengthゾーン2で起動するインスタンス間での通信を可能にするには、Transit Gatewayを利用します。`, `存在するVPC Aの中に新規に2つのサブネットを作成し、それぞれをWavelengthゾーン1とWavelengthゾーン2に関連付けます。それぞれのWavelengthゾーンにあるキャリアゲートウェイでルーティングを設定し、インスタンス間通信を可能にします。`, `新規にVPC Bを作成します。存在するVPC AについてはそのサブネットをWavelengthゾーン1に関連付けます。VPC Bの内部でサブネットを作成し、それをWavelengthゾーン2に関連付けます。Wavelengthゾーン1とWavelengthゾーン2で起動するインスタンス間での通信を可能にするには、VPCピアリングを利用します。`, `VPC Aの中に新規に一つのサブネットを作成し、それをWavelengthゾーン1とWavelengthゾーン2に関連付けます。それぞれのWavelengthゾーンにあるキャリアゲートウェイでルーティングを設定し、親リージョンのVPCを経由してインスタンス間通信を許可します。`],
	multipleAnswers: false,
	correctAnswers: [`新規にVPC Bを作成します。存在するVPC AについてはそのサブネットをWavelengthゾーン1に関連付けます。VPC Bの内部でサブネットを作成し、それをWavelengthゾーン2に関連付けます。Wavelengthゾーン1とWavelengthゾーン2で起動するインスタンス間での通信を可能にするには、Transit Gatewayを利用します。`],
	explanation: `同じVPCに関連付けられている2つの異なるWavelengthゾーン上で起動したAmazon EC2インスタンスは直接通信することはできません。このような通信を可能にするには、それぞれ異なるVPCを作成する必要があります。それぞれのWavelengthゾーンはそれぞれのVPCに関連付けられ、これらのVPC間の通信を可能にするためにはTransit Gatewayが利用可能です。 今回のシナリオでは、Wavelengthゾーン1がVPC Aに、Wavelengthゾーン2がVPC Bに関連付けられています。Wavelengthゾーン1とWavelengthゾーン2上のインスタンス間の通信を有効にするため、VPC AとVPC B間のルーティングを設定するためにTransit Gatewayが推奨されます。 選択肢Bは不適切です。同一のVPCの2つの異なるWavelengthゾーンの一部となるサブネットに関連付けられたインスタンスは直接通信できません。 選択肢Cも不適切です。VPCピアリングを使用するとすべてのサブネットが無差別に相互に通信することが許可されますが、今回の要件ではそこまでの範囲の通信許可は必要ありません。 選択肢Dもまた不適切です。単一のサブネットを2つのWavelengthゾーンに跨がる形で拡張することはできません。VPCの拡張については以下のURLを参照ください。https://docs.aws.amazon.com/vpc/latest/userguide/Extend_VPCs.html`,
	subQuestions: [{
		id: 1,
		question: `AWS Wavelengthゾーンでは、同一のVPCに関連付けられた2つの異なるゾーン上で起動したAmazon EC2インスタンスは直接通信できるでしょうか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `同じVPCに関連付けられた2つの異なるWavelengthゾーン上で起動したAmazon EC2インスタンスは直接通信することはできません。それぞれ異なるVPCを作成し、それぞれのWavelengthゾーンをそれぞれのVPCに関連付け、それら間の通信を可能にするためにはTransit Gatewayなどが利用可能です。`
	}, {
		id: 2,
		question: `Wavelengthゾーン間のインスタンス間通信を確立するために適切なサービスは何でしょうか？`,
		options: [`Transit Gateway`, `VPCピアリング`, `Direct Connect`, `VPN接続`],
		multipleAnswers: false,
		correctAnswers: [`Transit Gateway`],
		explanation: `通信を可能にするには、異なるVPCをそれぞれのWavelengthゾーンに関連付け、それらのVPC間の通信を設定する必要があります。そのためにTransit Gatewayを利用します。`
	}, {
		id: 3,
		question: `同一のVPCの2つの異なるWavelengthゾーンの一部となるサブネットに関連付けられたEC2インスタンスは直接通信できるでしょうか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `同一のVPCの2つの異なるWavelengthゾーンの一部となるサブネットに関連付けられたインスタンスは直接通信できません。それぞれ異なるVPCをそれぞれのWavelengthゾーンに関連付け、それら間の通信を可能にするためにはTransit Gatewayなどが利用可能です。`
	}, {
		id: 4,
		question: `単一のサブネットを2つのWavelengthゾーンに跨がる形で拡張することは可能でしょうか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `単一のサブネットを2つのWavelengthゾーンに跨がる形で拡張することはできません。それぞれ異なるサブネットをそれぞれのWavelengthゾーンに作成し、それぞれのWavelengthゾーンはそれぞれのVPCに関連付けられます。`
	}, {
		id: 5,
		question: `VPCピアリングを使用すると、すべてのサブネットが無差別に相互に通信が許可されるでしょうか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`はい`],
		explanation: `VPCピアリングを使用すると2つのVPC間でプライベートIPv4、またはIPv6アドレスを使用してネットワーク接続がます。これにより両VPCのすべてのサブネット間で通信が可能になります。ただし、それが必要以上の範囲の通信を許可してしまい適切でない場合もあります。通信の許可範囲を適切に制御するためには、セキュリティグループやNACLなどを適切に設定する必要があります。`
	}]
}, {
	id: 74,
	question: `あるエンジニアリング企業は、AWSのアカウントで数多くのAmazon S3バケットを運用しています。内部スタッフと外部パートナーがこれらのAmazon S3バケットにデータを保存するためには違う認証レベルが必要で、それらの認証は最小特権というAWSのセキュリティベストプラクティスに基づいて承認されるべきです。そして、その認証は大量のバケットとユーザーを考慮して効率的に与えられなければなりません。「my_sample_bucket」という名前のバケットに適用するサンプルポリシーを作成する必要があります。次に挙げられたポリシーのうち、要件に最も適しているのはどれでしょうか？`,
	options: [`{ "Version": "2012-10-17", "Statement": [ ["arn:aws:s3:::*"] } ] }`, `{ "Version": "2012-10-17", "Statement":[{ ["arn:aws:s3:::my_sample_bucket/*"] } ] }`, `{ "Version": "2012-10-17", "Statement": [ ["arn:aws:iam::123456789000:user/XYZ"] my_sample_bucket/*"] } ] }`, `{ "Version": "2012-10-17", "Statement": [ ["arn:aws:iam::123456789000:user/*"] }, { "Effect": "Allow", "Action": "s3:*", "Resource": "Effect": "Allow", "Action": "s3:*", "Resource": { "Effect": "Allow", }, "Action": "s3:*", { "Effect": "Allow", "Action": "s3:*", "Resource": ["arn:aws:s3:::*"] } ] "Principal": { "AWS": "Resource": ["arn:aws:s3::: "Principal": { "AWS": `],
	multipleAnswers: false,
	correctAnswers: [`{ "Version": "2012-10-17", "Statement":[{ ["arn:aws:s3:::my_sample_bucket/*"] } ] }`],
	explanation: `大量のAmazon S3バケットに対する権限管理が必要な状況では、IAMポリシーの使用がAmazon S3バケットポリシーよりも推奨されます。多数のS3バケットに対してリソースポリシーを適用し維持する作業は、余分な管理作業を引き起こす可能性があります。IAMポリシーを利用すれば、ユーザーに付与すべきパーミッションに応じて異なるポリシーを作成可能です。ユーザーをグループ化することで、各個人に対してIAMポリシーを作る必要がなくなります。S3バケットに関係する全てのポリシーには、「Principal''というJSON要素が含まれています。これは、バケットポリシーがどの主体に対してアクセスを許可するかを決定します。一方、IAMポリシーには「Principal'' JSON要素は存在しません。これは、IAMポリシーがどのエンティティに適用されいるかを示しています。ケースによっては、「my_sample_bucket」のような特定のバケット名に対して全てのS3操作を許可するIAMポリシーを作成出来るわけです。適切な許可権限に基づいて各々のIAMポリシーを作り、個々のユーザーやユーザーグループに対して様々なS3バケットへのアクセスを許可することが出来ます。オプションAは誤りです。このIAMポリシーは、全てのS3バケットに対して全ての操作を許可します。オプションCは誤りです。このS3バケットポリシーは、ユーザーXYZに対して「my_sample_bucket」へのフルアクセス権を割り当てます。何千ものS3バケットがあるため、各ユーザーに対して各バケットでバケットポリシーを保守するのは管理のオーバーヘッドが発生します。オプションDは誤りです。`,
	subQuestions: [{
		id: 1,
		question: `AWSのセキュリティベストプラクティスの一つ、「最小特権」について適切な説明を選びなさい。`,
		options: [`すべてのユーザーにデフォルトで全ての権限を与え尽くした後に不要な権限を削除すること`, `ユーザーが必要とする権限のみを付与し、それ以上の権限は付与しないこと`, `全てのユーザーに全ての権限を均等に配分すること`, `ユーザーが権限を必要とする度に、その都度その権限を付与し削除を繰り返すこと`],
		multipleAnswers: false,
		correctAnswers: [`ユーザーが必要とする権限のみを付与し、それ以上の権限は付与しないこと`],
		explanation: `最小特権とは、ユーザーに必要最小限の権限のみを付与し、余分な権限を付与しないというセキュリティベストプラクティスの一つです。これにより、ユーザーが不必要な操作を行うリスクを最小限に抑えることができます。`
	}, {
		id: 2,
		question: `Amazon S3バケットポリシーとIAMポリシーの違いについて正しい選択肢を選びなさい。`,
		options: [`Amazon S3バケットポリシーは特定のバケットに対するポリシーであり、IAMポリシーはユーザー、グループ、ロールに対するポリシーである`, `Amazon S3バケットポリシーはユーザー、グループ、ロールに対するポリシーであり、IAMポリシーは特定のバケットに対するポリシーである`, `Amazon S3バケットポリシーとIAMポリシーの違いは存在しない`, `Amazon S3バケットポリシーはIAMポリシーの一部である`],
		multipleAnswers: false,
		correctAnswers: [`Amazon S3バケットポリシーは特定のバケットに対するポリシーであり、IAMポリシーはユーザー、グループ、ロールに対するポリシーである`],
		explanation: `Amazon S3バケットポリシーとIAMポリシーは用途や適用範囲が異なります。Amazon S3バケットポリシーは特定のバケットに対するアクセス制御を行い、IAMポリシーはユーザー、グループ、ロールに対するアクセス制御を行います。`
	}, {
		id: 3,
		question: `バケットポリシーが多数のS3バケットに対して適用される場合のデメリットとして、正しいものを選びなさい。`,
		options: [`バケットポリシーは全バケットに適用できるため管理が複雑になる`, `バケットポリシーは1つのバケットにしか適用できないため、各バケットごとに保守が必要になる`, `バケットポリシーの保守作業は容易である`, `バケットポリシーは適用できないため、IAMポリシーに依存しなければならない`],
		multipleAnswers: false,
		correctAnswers: [`バケットポリシーは1つのバケットにしか適用できないため、各バケットごとに保守が必要になる`],
		explanation: `バケットポリシーは一つのバケットに対して直接適用されるもので、そのため多数のS3バケットに対して個々に管理しなければならない手間が発生します。これは、特に大量のバケットを扱う場合、管理が煩雑となりやすいデメリットとなります。`
	}, {
		id: 4,
		question: `IAMポリシーを利用する利点として最も適切な選択肢を選びなさい。`,
		options: [`ユーザーに対して個々にIAMポリシーを作る必要がある`, `IAMポリシーを利用すると、S3バケットに関係なく全てのAWSリソースへのアクセスを許可することができる`, `IAMポリシーを利用すれば、ユーザーに付与すべきパーミッションに応じた異なるポリシーを作成可能で、ユーザーをグループ化することもできる`, `IAMポリシーを利用すると、すべてのユーザーについて同一のポリシーを付与することが必要になる`],
		multipleAnswers: false,
		correctAnswers: [`IAMポリシーを利用すれば、ユーザーに付与すべきパーミッションに応じた異なるポリシーを作成可能で、ユーザーをグループ化することもできる`],
		explanation: `IAMポリシーを使うと、付与すべき権限に応じて異なるポリシーを作成でき、それによって適切な権限管理が可能となります。またそれらのユーザーたちをグループ化することで、権限をまとめて管理することが可能となり、効率的な管理が可能になります。`
	}, {
		id: 5,
		question: `次の中で、AWS IAMポリシーの「Principal」とは何を意味するか正しいものを選択してください。`,
		options: [`操作主体、つまり、誰が許可または拒否されるアクションを実行できるかを表す`, `効果、つまり、許可されるアクションか、拒否されるアクションかを表す`, `AWSリソースへのアクションを表す`, `AWSリソースの名前を表す`],
		multipleAnswers: false,
		correctAnswers: [`操作主体、つまり、誰が許可または拒否されるアクションを実行できるかを表す`],
		explanation: `AWS IAMポリシーの「Principal」とは、誰が許可または拒否されるアクションを実行できるか、つまり操作主体を表します。具体的には、ユーザー、アプリケーション、サービスが該当します。`
	}]
}, {
	id: 75,
	question: `サービスプロバイダの企業は、アジア地域の多数の国でAWS IoTソリューションを配布する予定です。彼らは工場のIoTデバイスを設置し、機器データを収集します。工場の一部はネットワーク接続が難しい遠隔地に位置しています。企業は、このような遠隔デバイスでローカル計算機能を実行し、加工したデータを暗号化された形式で安全にIoTコアへアップロードすることを必要としています。提案されるソリューションは、数千のデバイスを扱う能力があり、接続問題を克服してデータ同期を実現しなければなりません。どのようにこの要求を満たすソリューションを設計すればよいでしょうか？`,
	options: [`世界的に配布されたデバイスとともにAWS IoT Greengrassを使用する`, `世界的に配布されたデバイスとともにAWS IoT Device Managementを使用する`, `世界的に配布されたデバイスとともにAWS IoT Device Defenderを使用する`, `世界的に配布されたデバイスとともにAWS IoT SiteWiseを使用する`],
	multipleAnswers: false,
	correctAnswers: [`世界的に配布されたデバイスとともにAWS IoT Greengrassを使用する`],
	explanation: `AWS IoT Greengrassは、接続デバイスにおけるローカルコンピューティング、メッセージング、データキャッシュ、同期、およびML推論を実現するソフトウェアサービスです。デバイス上のデータをAWS IoT Coreと同期することにより、接続が途切れた場合でもデータ同期が可能となります。AWS IoT Greengrassは、データをIoT Coreにアップロードするためのゲートウェイとしても機能します。 オプション2は、AWS IoT Device Managementは、クラウドベースのデバイス管理とリモートのIoTデバイス管理に適合していますが、リモートIoTデバイスでのローカルコンピューティングを実現するには適していません。 オプション3は、AWS IoT Device DefenderはIoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証するために適していますが、リモートIoTデバイスでのローカルコンピューティングを実行するには適していません。 オプション4のAWS IoT SiteWiseは、多数の工場施設からのセンサーデータを収集、保管、管理、視覚化するために設計されていますが、リモートIoTデバイスでのローカルコンピューティングを実現するには適していません。`,
	subQuestions: [{
		id: 1,
		question: `AWS IoT Greengrassの主な機能はどれですか？`,
		options: [`リモートIoTデバイスでのローカルコンピューティング`, `IoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証する`, `クラウドベースのデバイス管理とリモートのIoTデバイス管理`, `多数の工場施設からのセンサーデータを収集、保管、管理、視覚化する`],
		multipleAnswers: false,
		correctAnswers: [`リモートIoTデバイスでのローカルコンピューティング`],
		explanation: `AWS IoT Greengrassは、接続デバイスにおけるローカルコンピューティング、メッセージング、データキャッシュ、同期、およびML推論を実現するソフトウェアサービスです。`
	}, {
		id: 2,
		question: `AWS IoT Device Managementの主な機能は何ですか？`,
		options: [`リモートIoTデバイスでのローカルコンピューティング`, `IoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証する`, `クラウドベースのデバイス管理とリモートのIoTデバイス管理`, `多数の工場施設からのセンサーデータを収集、保管、管理、視覚化する`],
		multipleAnswers: false,
		correctAnswers: [`クラウドベースのデバイス管理とリモートのIoTデバイス管理`],
		explanation: `AWS IoT Device Managementは、クラウドベースのデバイス管理とリモートのIoTデバイス管理に適合しています。`
	}, {
		id: 3,
		question: `AWS IoT Device Defenderの主な機能は何ですか？`,
		options: [`リモートIoTデバイスでのローカルコンピューティング`, `IoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証する`, `クラウドベースのデバイス管理とリモートのIoTデバイス管理`, `多数の工場施設からのセンサーデータを収集、保管、管理、視覚化する`],
		multipleAnswers: false,
		correctAnswers: [`IoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証する`],
		explanation: `AWS IoT Device DefenderはIoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証するために適しています。`
	}, {
		id: 4,
		question: `AWS IoT SiteWiseの主な目的は何ですか？`,
		options: [`リモートIoTデバイスでのローカルコンピューティング`, `IoTデバイスの設定を監視し、セキュリティポリシーから逸脱しないことを保証する`, `クラウドベースのデバイス管理とリモートのIoTデバイス管理`, `多数の工場施設からのセンサーデータを収集、保管、管理、視覚化する`],
		multipleAnswers: false,
		correctAnswers: [`多数の工場施設からのセンサーデータを収集、保管、管理、視覚化する`],
		explanation: `AWS IoT SiteWiseは、多数の工場施設からのセンサーデータを収集、保管、管理、視覚化するために設計されています。`
	}, {
		id: 5,
		question: `工場のIoTデバイスデータを安全にIoTコアへアップロードするためのベストプラクティスは何ですか？`,
		options: [`世界的に配布されたデバイスとともにAWS IoT Greengrassを使用する`, `世界的に配布されたデバイスとともにAWS IoT Device Managementを使用する`, `世界的に配布されたデバイスとともにAWS IoT Device Defenderを使用する`, `世界的に配布されたデバイスとともにAWS IoT SiteWiseを使用する`],
		multipleAnswers: false,
		correctAnswers: [`世界的に配布されたデバイスとともにAWS IoT Greengrassを使用する`],
		explanation: `AWS IoT Greengrassは、データをIoT Coreにアップロードするためのゲートウェイとして機能します。デバイス上のデータをAWS IoT Coreと同期することにより、接続が途切れた場合でもデータ同期が可能となります。`
	}]
},
{
	id: 21,
	question: `ある大規模なビデオストリーミング企業は、様々な長さのビデオやメディアファイルを集中的なオンプレミスストレージにホストしています。企業は動画にグラフィックオーバーレイ、コンテンツ保護、多言語オーディオ、クローズドキャプション、プロフェッショナルブロードキャスト形式の機能を追加して、小型端末、タブレット、ウェブブラウザ、接続テレビに対応した形式に変換したいと考えています。AWSをクラウドプロバイダとして選んだこの企業は、変換したファイルを保存するためのコストエフェクティブなストレージサービスを計画しており、また選定されたユーザー（有料ユーザー）向けにセキュアで低遅延のキャッシュベースの配信システムも設定したいと考えています。あなたがこの企業のソリューションアーキテクトであるとすれば、この要件に対して何を提案しますか？（3つ選んでください）`,
	options: [`Amazon Kinesis Video Streamsを活用して、Amazon S3に保存されているメディアファイルを消費者向けのデバイスが必要とする形式に変換する。`, `AWS Elemental MediaConvertを利用して、上記の全面的な機能を追加し、Amazon S3に保存されているメディアファイルを見ることができる形式に変換する。`, `変換後のメディアファイルをAmazon FSx for Lustreストレージに格納し、それらを高パフォーマンスのEC2インスタンスにマウントして最終利用者向けの追加処理を行う。`, `Amazon S3をストレージとして活用し、変換したメディアファイルを保存する。`, `Amazon CloudFront Signed URLを使用して、有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムの提供。`, `AWS Global Acceleratorを活用して、有料ユーザーのみを対象とした安全な低遅延内容配信システムの実現。`],
	multipleAnswers: true,
	correctAnswers: [`AWS Elemental MediaConvertを利用して、上記の全面的な機能を追加し、Amazon S3に保存されているメディアファイルを見ることができる形式に変換する。`, `Amazon S3をストレージとして活用し、変換したメディアファイルを保存する。`, `Amazon CloudFront Signed URLを使用して、有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムの提供。`],
	explanation: `正解はオプション2, 4, 5です。 オプション1は、エッジデバイスなどからデータを直接取り込むことに適したサービスであり、ビデオをストレージから取り出して再処理するのには適していません。 オプション3は、費用対効果の低い解決策であり、特にコンテンツのエンドユーザーへの配信には最適ではありません。適切なストレージとデリバリーソリューションを使用すべきです。 オプション6は、全体のアプリケーションパフォーマンスを改善するためのサービスであり、特定のユーザーグループを対象とした配信には不向きです。`,
	subQuestions: [{
		id: 1,
		question: `Amazon Kinesis Video Streamsはどのような目的で使用されますか？`,
		options: [`エッジデバイスからデータを直接取り込む`, `ビデオをストレージから取り出して再処理する`, `有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムを設定する`, `全面的なビデオ機能を追加し、メディアファイルを変換する`],
		multipleAnswers: false,
		correctAnswers: [`エッジデバイスからデータを直接取り込む`],
		explanation: `Amazon Kinesis Video Streamsはエッジデバイスなどからデータを直接取り込むことに適したサービスであり、ビデオをストレージから取り出して再処理するのには適していません。`
	}, {
		id: 2,
		question: `AWS Elemental MediaConvertは何に使用されますか？`,
		options: [`エッジデバイスからデータを直接取り込む`, `ビデオをストレージから取り出して再処理する`, `全面的なビデオ機能を追加し、メディアファイルを変換する`, `有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムを設定する`],
		multipleAnswers: false,
		correctAnswers: [`全面的なビデオ機能を追加し、メディアファイルを変換する`],
		explanation: `AWS Elemental MediaConvertは、全面的な機能を追加し、Amazon S3に保存されているメディアファイルを見ることができる形式に変換するために使用されます。`
	}, {
		id: 3,
		question: `Amazon S3ストレージは何に使用されますか？`,
		options: [`変換したメディアファイルを保存する`, `ビデオをストレージから取り出して再処理する`, `エッジデバイスからデータを直接取り込む`, `全体のアプリケーションパフォーマンスを改善する`],
		multipleAnswers: false,
		correctAnswers: [`変換したメディアファイルを保存する`],
		explanation: `Amazon S3をストレージとして活用し、変換したメディアファイルを保存することができます。`
	}, {
		id: 4,
		question: `Amazon CloudFront Signed URLは何に使用されますか？`,
		options: [`全体のアプリケーションパフォーマンスを改善する`, `エッジデバイスからデータを直接取り込む`, `有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムを設定する`, `ビデオをストレージから取り出して再処理する`],
		multipleAnswers: false,
		correctAnswers: [`有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムを設定する`],
		explanation: `Amazon CloudFront Signed URLを使用して、有料ユーザーのみを対象としたキャッシュベースの低遅延コンテンツ配信システムを設定することができます。`
	}, {
		id: 5,
		question: `AWS Global Acceleratorは何に使用されますか？`,
		options: [`有料ユーザーのみを対象とした安全な低遅延内容配信システムの実現`, `全体のアプリケーションパフォーマンスを改善する`, `ビデオをストレージから取り出して再処理する`, `エッジデバイスからデータを直接取り込む`],
		multipleAnswers: false,
		correctAnswers: [`全体のアプリケーションパフォーマンスを改善する`],
		explanation: `AWS Global Acceleratorは、全体のアプリケーションパフォーマンスを改善するためのサービスであり、特定のユーザーグループを対象とした配信には不向きです。`
	}]
}, {
	id: 23,
	question: `ある企業が2つのAWSアカウントを使用しています。1つは本番用であり、実際のアプリケーションを管理しています。もう1つは開発用で、開発者やテスターが自由に変更し、アプリケーションのテストに使用するための環境です。それぞれのアカウントでは、Amazon S3バケットを使用してアプリケーションの情報を保存します。開発アカウントには「開発者」および「テスター」の2つのIAMユーザーグループが存在し、これらのユーザーグループのメンバーは開発アカウント内で作業を行い、その中のリソースにアクセスする権限を持っています。現在、開発者が頻繁に本番用アカウントのアプリケーションを更新する必要があります。本番用アカウントにおいて、開発者はこれらのアプリケーションを「productionapp」という名前のAmazon S3バケットに保存する必要があります。この企業は次の要件を満たすセキュリティ戦略が求められています： - 開発者はAWS管理コンソールを通じて本番用アカウントのproductionappバケットにアクセスできる。 - APIを使用してバケットにアクセスすることが可能。 - テスターがproductionappバケットへのアクセスを試みると失敗する。 - このセキュリティ要件に加え、ソリューションは管理と運用の負担を減らすべきである。 これらの要件を満たす戦略はどれでしょうか？`,
	options: [`i) 本番用アカウントにIAMロール「UpdateProductionApp」を作成し、信頼されるエンティティとして開発アカウントを指定する。また、信頼されたユーザーが「productionapp」バケットを更新できるように権限ポリシーを設定する。ii) 開発アカウントで、開発者向けのIAMユーザーグループポリシーを「sts:AssumeRole」に設定し、開発者がIAMロール「UpdateProductionApp」へのアクセスを許可されるようにポリシーを修正する。同時に、テスターから「UpdateProductionApp」ロールへのアクセスを明示的に拒否する。iii) 本番用アカウントとロールの切り替えをテストする。`, `i) 本番用アカウントにIAMロール「UpdateProductionApp」を作成し、信頼されるエンティティとして開発アカウントを指定する。また、信頼されたユーザーが「productionapp」バケットを更新できるように権限ポリシーを設定する。ii) 開発アカウントで、開発者向けのIAMユーザーグループポリシーを「sts:ExternalId」の条件で「sts:AssumeRole」に設定し、開発者がIAMロール「UpdateProductionApp」へのアクセスを許可されるようにポリシーを修正する。同時に、テスターから「UpdateProductionApp」ロールへのアクセスを明示的に拒否する。iii) 本番用アカウントとロールの切り替えをテストする。`, `i) 本番用アカウントにIAMロール「UpdateProductionApp」を作成し、信頼されたユーザーが「productionapp」バケットを更新できるように権限ポリシーを設定する。ii) 本番用アカウントに「Development」という名前のIAMユーザーグループを設定し、このグループに「UpdateProductionApp」ロールを関連付ける。iii) 各開発者にIAMユーザーを作成し、「Development」グループに割り当てる。`, `i) 本番用アカウントにIAMロール「UpdateProductionApp」を作成し、信頼されるエンティティとして開発アカウントを指定する。また、信頼されたユーザーが「productionapp」バケットを更新できるように権限ポリシーを設定する。ii) 開発アカウントでIAMユーザーグループのポリシーを修正し、「sts:AssumeRole」で開発者が「UpdateProductionApp」ロールへのアクセスを認証し、テスターに「UpdateProductionApp」ロールへのアクセスを明示的に拒否する。iii) 「s3:PutObject」および「s3:PutObjectAcl」の権限を開発アカウントに付与し、「productionapp」バケット内のS3バケットポリシーを使用する。`],
	multipleAnswers: false,
	correctAnswers: [`i) 本番用アカウントにIAMロール「UpdateProductionApp」を作成し、信頼されるエンティティとして開発アカウントを指定する。また、信頼されたユーザーが「productionapp」バケットを更新できるように権限ポリシーを設定する。ii) 開発アカウントで、開発者向けのIAMユーザーグループポリシーを「sts:AssumeRole」に設定し、開発者がIAMロール「UpdateProductionApp」へのアクセスを許可されるようにポリシーを修正する。同時に、テスターから「UpdateProductionApp」ロールへのアクセスを明示的に拒否する。iii) 本番用アカウントとロールの切り替えをテストする。`],
	explanation: `選択肢Aが正しいです。これらの手順により、以下の状況が整います：本番用アカウントには「productionapp」バケットが存在します。開発アカウント（信託アカウント）のユーザーは、本番用アカウント内の特定のロールを引き継ぐ権限があります。および、本番用アカウント（信託者アカウント）のロールは、特定のAmazon S3バケットへのアクセスを許可されています。開発アカウントの開発者は、AWS管理コンソール、AWS CLI、またはAWS APIから、「UpdateProductionApp」ロールを引き継ぎ、「productionapp」バケットにアクセスできます。選択肢Bは間違っています。なぜなら、「sts:ExternalId」は主に第三者へのアクセスを許可し、権限ポリシーの「Condition」要素を必要とするからです。選択肢Cは間違っています。なぜなら、運用と管理の負荷を増大させる本番用アカウント内で、別のユーザーグループとユーザーセットを維持することになるからです。選択肢Dは間違っています。なぜなら、S3バケットポリシーはこのケースでは関連していません。選択肢iおよびiiが満たされている場合、開発アカウントの開発者はロールを切り替えるだけでバケットにアクセスできます。`,
	subQuestions: [{
		id: 1,
		question: `AWSの「sts:AssumeRole」のポリシーは何のために使用されますか？`,
		options: [`特定のIAMロールを引き継ぐため`, `AWSリソースへのアクセスを制限するため`, `新しいIAMユーザーを作成するため`, `IAMポリシーを編集するため`],
		multipleAnswers: false,
		correctAnswers: [`特定のIAMロールを引き継ぐため`],
		explanation: `「sts:AssumeRole」ポリシーは、特定のIAMロールを引き継ぐために使用されます。これにより、ユーザーはあるアカウントから別のアカウントのロールを引き継いで、そのロールと同じパーミッションを得ることができます。`
	}, {
		id: 2,
		question: `AWSの「sts:ExternalId」のポリシーは何のために使用されますか？`,
		options: [`IAMユーザーを作成するため`, `新しいS3バケットを作成するため`, `第三者へのアクセスを許可するため`, `AWSリソースへのアクセスを制限するため`],
		multipleAnswers: false,
		correctAnswers: [`第三者へのアクセスを許可するため`],
		explanation: `「sts:ExternalId」はAWSの「AssumeRole」APIで使用され、特定の第三者だけがロールを引き継ぐことを確認します。なお、このポリシーは主に第三者へのアクセスを許可し、権限ポリシーの「Condition」要素を必要とします。`
	}, {
		id: 3,
		question: `IAMロール作成時に信頼エンティティとして指定されるものは何ですか？`,
		options: [`AWSアカウント`, `APIキー`, `S3バケット`, `IAMユーザーグループ`],
		multipleAnswers: false,
		correctAnswers: [`AWSアカウント`],
		explanation: `IAMロールを作成するとき、そのロールを引き継げるサービスやアカウント（信頼エンティティ）を指定します。AWSでは、信頼エンティティとして他のAWSアカウントを指定できます。`
	}, {
		id: 4,
		question: `複数のAWSアカウントで作業しているとき、開発者はどのようにして別のアカウントのリソースにアクセスできますか？`,
		options: [`ロールスイッチングを使用してIAMロールを引き継ぐ`, `新しいIAMユーザーを作成する`, `開発者のパスワードを変更する`, `本番用アカウントのAPIキーを使用する`],
		multipleAnswers: false,
		correctAnswers: [`ロールスイッチングを使用してIAMロールを引き継ぐ`],
		explanation: `開発者はロールスイッチングを使用して、開発用アカウントから本番用アカウントのIAMロールを引き継げます。これにより、開発者は本番用アカウントのリソースにアクセスできます。`
	}, {
		id: 5,
		question: `AWSアカウント間でリソースを共有するための最も安全で管理負荷が低い方法は何ですか？`,
		options: [`IAMロールとロールスイッチングを使用する`, `各ユーザーに個々のIAMユーザーを作成する`, `同じパスワードを使用するIAMユーザーを複数作成する`, `各ユーザーに個々のAPIキーを提供する`],
		multipleAnswers: false,
		correctAnswers: [`IAMロールとロールスイッチングを使用する`],
		explanation: `別のAWSアカウントのリソースにアクセスするには、IAMロールを引き継いでロールスイッチングを使用するのが最良の方法です。これにより管理負荷を軽減し、適切な既存の認証メカニズムを維持しつつ、異なる権限を一時的に利用できます。`
	}]
}, {
	id: 24,
	question: `健康追跡デバイスの企業が全ての利用者データをAmazon DynamoDBで保管しています。新たなバックアップ戦略を策定しようとしており、組織内の全てのアカウントでDynamoDBテーブルを週に一度デフォルトのバックアップ頻度でバックアップすることを希望しています。また、企業はプロダクションアカウントに対し1日1回のバックアップ頻度のバックアップポリシーを直接適用したいと考えています。この要件を満たすソリューションは何でしょうか？`,
	options: [`AWS BatchのJob Definitionにバックアップポリシーを設定します。 AWS Batch Jobsを週に一度と日に一度、アカウントタイプに基づいて実行します。`, `Amazon DynamoDBバックアップ用のAWS Lambda関数を作成します。 Amazon Event Bridge（CloudWatch Events）を使用して、全てのアカウントで週に一度、プロダクションアカウントで1日1回のLambdaトリガーをスケジュールします。`, `AWS Backupを用いて、それぞれの日次および週次頻度に基づくプロダクションとその他のアカウントのバックアップポリシーを定義します。 AWS Organizationsを活用しデフォルトバックアップポリシー（週に一度）を有効化し、ルート、OU、またはアカウントへ割り当てます。 プロダクションアカウントに対しては、バックアップ頻度を日次に設定したバックアップポリシーを定義し、バックアップポリシーを直接プロダクションアカウントに割り当てます。`, `各アカウントのバックアップの頻度に応じて、テーブルの完全なバックアップを作成するためにDynamoDBのオンデマンドバックアップ機能を使用します。`],
	multipleAnswers: false,
	correctAnswers: [`AWS Backupを用いて、それぞれの日次および週次頻度に基づくプロダクションとその他のアカウントのバックアップポリシーを定義します。 AWS Organizationsを活用しデフォルトバックアップポリシー（週に一度）を有効化し、ルート、OU、またはアカウントへ割り当てます。 プロダクションアカウントに対しては、バックアップ頻度を日次に設定したバックアップポリシーを定義し、バックアップポリシーを直接プロダクションアカウントに割り当てます。`],
	explanation: `選択肢Aは誤りです。AWS BatchはAWSクラウド上でのバッチコンピューティングワークロードを支援しますが、バックアップソリューションとしては不適切です。\n選択肢Bは誤りです。特別にLambda関数を作成してDynamoDBをバックアップしなくても、DynamoDBには既にそれぞれのテーブルで利用可能な組み込みのバックアップ機能が存在します。\n選択肢Cが正解です。AWS BackupとAWS Organizationsを組み合わせて使用し、組織内でのバックアップポリシータイプの有効化と、週に一度の頻度のデフォルトのバックアップポリシーを設定し、そのポリシーを組織のルート、OU、またはアカウントへ割り当てる事が可能です。 プロダクションアカウントに対しては、バックアップ頻度を日次に設定したバックアップポリシーを定義し、そのポリシーを直接プロダクションアカウントに割り当てることが可能です。\n選択肢Dは誤りです。DynamoDBのオンデマンドバックアップは他のアカウントや地域へのコピーができないためです。 AWSアカウント間でのバックアップコピーと他の高度な機能を確立するには、AWS Backupの使用が必要です。`,
	subQuestions: [{
		id: 1,
		question: `どのAWSサービスが企業全体のバックアップポリシーの有効化と管理できますか？`,
		options: [`AWS Batch`, `AWS Organizations`, `Amazon S3`, `AWS Lambda`],
		multipleAnswers: false,
		correctAnswers: [`AWS Organizations`],
		explanation: `AWS Organizationsは、複数のAWSアカウントを設定、管理、および一元化するためのアカウント管理サービスです。これは企業全体のバックアップポリシーの有効化と管理に使用できます。`
	}, {
		id: 2,
		question: `AWS Backupは何をするためのサービスでしょうか？`,
		options: [`AWSのデータを保護し、バックアップ、リストア、および保持要件を満たす`, `AWSクラウド上でのバッチコンピューティングワークロードを支援する`, ` Amazon DynamoDBテーブルの読み取りと書き込みのスループットを簡単に調整できる`, `AWSリソースやアプリケーションのワークロードを移行する`],
		multipleAnswers: false,
		correctAnswers: [`AWSのデータを保護し、バックアップ、リストア、および保持要件を満たす`],
		explanation: `AWS Backupは、AWSのデータを保護し、バックアップ、リストア、および保持要件を満たすための簡単なサービスです。企業は、一元化したダッシュボードから、ポリシーベースのバックアップスケジュールと保持ルールを策定できます。`
	}, {
		id: 3,
		question: `Amazon DynamoDBのオンデマンドバックアップ機能が他のアカウントや地域へのコピーができない原因は何でしょうか？`,
		options: [`オンデマンドバックアップは暗号化されていない`, `AWSアカウント間でのバックアップコピーと他の高度な機能を確立するには、AWS Backupの使用が必要`, `DynamoDBには組み込みのバックアップ機能が存在しない`, `AWS Batchにはバックアップ機能が存在する`],
		multipleAnswers: false,
		correctAnswers: [`AWSアカウント間でのバックアップコピーと他の高度な機能を確立するには、AWS Backupの使用が必要`],
		explanation: `DynamoDBのオンデマンドバックアップ機能は他のアカウントや地域へのコピーができません。そのためAWSアカウント間でのバックアップコピーと他の高度な機能を確立するには、AWS Backupの使用が必要となります。`
	}, {
		id: 4,
		question: `AWS Batchは何のためのサービスでしょうか？`,
		options: [`AWSのデータを保護し、バックアップ、リストア、および保持要件を満たす`, `AWSクラウド上でのバッチコンピューティングワークロードを支援する`, ` Amazon DynamoDBテーブルの読み取りと書き込みのスループットを簡単に調整できる`, `AWSリソースやアプリケーションのワークロードを移行する`],
		multipleAnswers: false,
		correctAnswers: [`AWSクラウド上でのバッチコンピューティングワークロードを支援する`],
		explanation: `AWS BatchはAWSクラウド上でのバッチコンピューティングワークロードを支援するサービスです。このサービスでは、複数のバッチジョブを効率的に実行し、管理する事が可能です。`
	}, {
		id: 5,
		question: `Amazon DynamoDBバックアップ用のAWS Lambda関数を作成する場合、どのサービスを使用してスケジュールしますか？`,
		options: [`AWS Organizations`, `AWS Batch`, `Amazon Event Bridge（CloudWatch Events）`, `Amazon S3`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Event Bridge（CloudWatch Events）`],
		explanation: `AWS Lambda関数をスケジュールする際は通常、Amazon Event Bridge（旧称 CloudWatch Events）を使用します。これを使用して定期的な処理を行うことができます。`
	}]
}, {
	id: 25,
	question: `二つのAWSアカウントを管理している企業が存在します。ひとつはライブアプリケーションを操業するプロダクションアカウント、もうひとつは開発者やテスターが自由に試行錯誤を繰り返しアプリケーションのテストを行う開発アカウントです。それぞれのアカウントでは、アプリケーションの情報をAmazon S3バケットに保存しています。開発アカウントでは、「開発者」と「テスター」二つのIAMユーザーグループが設けられており、これらは開発アカウントでの作業とリソースへのアクセスが許可されています。場合によっては、開発者がプロダクションアカウントのAmazon S3バケット（productionapp）でライブアプリケーションのアップデートを行う必要があります。開発アカウントの開発者がプロダクションアカウントのproductionapp S3バケットにアクセスでき、一方でテスターがproductionappバケットへのアクセスが失敗するようにIAMのパーミッションを設定するには、以下のAWSのJSONポリシーエレメントの中からどれを利用すればよいでしょうか？`,
	options: [`i) 開発アカウントの「開発者」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } } ii) 同様に、開発アカウントの「テスター」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } }`, `i) 開発アカウントの「開発者」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp/*" } } ii) 同様に、開発アカウントの「テスター」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp/*" } }`, `i) 開発アカウントの「開発者」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp" } } ii) 同様に、開発アカウントの「テスター」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp" } }`, `i) 開発アカウントの「開発者」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp/*" } } ii) 同様に、開発アカウントの「テスター」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp/*" } }`],
	multipleAnswers: false,
	correctAnswers: [`i) 開発アカウントの「開発者」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } } ii) 同様に、開発アカウントの「テスター」向けのIAMユーザーグループポリシーを以下のように変更します： { "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } }`],
	explanation: `正解は選択肢Aです。全ての設定手順とJSONポリシーが正しいためです。選択肢B・Cは間違いです。なぜなら、本ケースではIAMパーミッションでバケット名を指定する必要がないためです。選択肢Dも間違いです。これはJSONポリシーのリソース指定の構文が不正確であるためです。参考：https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with- roles.html#tutorial_cross-account-with-roles-3`,
	subQuestions: [{
		id: 1,
		question: `AWSのIAMポリシー設定ではバケット名を指定するタイフのかを選びなさい`,
		options: [`全てのケースで必要`, `ケースにより異なる`, `全てのケースで不要`],
		multipleAnswers: false,
		correctAnswers: [`ケースにより異なる`],
		explanation: `AWS IAMのポリシー設定ではバケット名の指定が必要なケースとそうでないケースがあります。そのため、設定時には必要に応じてバケット名を指定します。`
	}, {
		id: 2,
		question: `JSONポリシーのリソース指定の構文が不正確なケースがどの選択肢に含まれていましたか？`,
		options: [`選択肢A`, `選択肢B`, `選択肢C`, `選択肢D`],
		multipleAnswers: false,
		correctAnswers: [`選択肢D`],
		explanation: `選択肢DのJSONポリシーのリソース指定の構文が不正確でした。`
	}, {
		id: 3,
		question: `開発者がS3のproductionappバケットへのアクエスを許される権限の変更に使用するJSONポリシーエレメントは次のうちどれですか？`,
		options: [`{ "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } }`, `{ "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp/*" } }`, `{ "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp" } }`, `{ "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp/*" } }`],
		multipleAnswers: false,
		correctAnswers: [`{ "Version": "2012-10-17", "Statement": { "Effect": "Allow", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } }`],
		explanation: `開発者のS3バケットへのアクセスを許可するためには、"arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp"リソースへの"sts:AssumeRole"アクションを許可するポリシーが必要です。`
	}, {
		id: 4,
		question: `テスターがS3のproductionappバケットへのアクセスを拒否される権限の変更に使用するJSONポリシーエレメントは次のうちどれですか？`,
		options: [`{ "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } }`, `{ "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp/*" } }`, `{ "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:s3:::productionapp" } }`, `{ "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp/*" } }`],
		multipleAnswers: false,
		correctAnswers: [`{ "Version": "2012-10-17", "Statement": { "Effect": "Deny", "Action": "sts:AssumeRole", "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp" } }`],
		explanation: `テスターがS3バケットへのアクセスを拒否するためには、"arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp"リソースへの"sts:AssumeRole"アクションを拒否するポリシーが必要です。`
	}, {
		id: 5,
		question: `「arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp」とは何を指していますか？`,
		options: [`IAMの本番アカウントのロール`, `S3のproductionappバケット`, `IAMの開発アカウントのロール`, `S3のUpdateProductionAppバケット`],
		multipleAnswers: false,
		correctAnswers: [`IAMの本番アカウントのロール`],
		explanation: `"arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateProductionApp"はIAMの中で定義された本番アカウントのロールを指しています。`
	}]
}, {
	id: 27,
	question: `あなたは、高トラフィックのECサイトのためにAmazon API Gatewayを利用したAPIを実装しています。このEC企業は、大量のリクエストが想定されており、APIやアカウントが過負荷になることを避けます。以下の2つの要点が重視されています。 ・全てのAWSユーザーへのアクセスを保証しつつ、基本的なサービスのパフォーマンスとアベイラビリティを保全すること ・悪質なコードや不適切な設定による予期せぬ課金を阻止し、ユーザーを保護すること 上記の要件を達成するために、あなたのAPI設計でどのような手法を採用しますか？`,
	options: [`A. AWS WAFと地域毎のWebACLをAPI GatewayのAPIステージに関連付け、レートベースのルールを適用する。`, `B. DynamoDBをデータベースとして、AWS Lambdaで作成されたマイクロサービスであるサーバーレスアーキテクチャを展開する。そして、LambdaとApplication Auto Scaling Groupで負荷に基づいて並列処理を可能にする。`, `C. CloudFrontの分散システムとLambda@Edge 機能を API Gatewayと結びつけ、API Gatewayを起点とする。`, `D. 各々のAPIステージやメソッドのターゲット制限を設け、全体的なパフォーマンスを向上させる。また、顧客からのリクエストをリクエストレートやクオータ制に基づいてコントロールするための使用計画を活用する。さらに、APIのレスポンス時間の向上のためAPIキャッシュを有効にする。`],
	multipleAnswers: false,
	correctAnswers: [`D. 各々のAPIステージやメソッドのターゲット制限を設け、全体的なパフォーマンスを向上させる。また、顧客からのリクエストをリクエストレートやクオータ制に基づいてコントロールするための使用計画を活用する。さらに、APIのレスポンス時間の向上のためAPIキャッシュを有効にする。`],
	explanation: `A選択肢は不適切です。AWS WAFはAPIの使用計画を制御する能力はなく、Web ACLルールを用いてAWSサービスを外部の脅威から保護するものです。Amazon API GatewayのAPIのパフォーマンスや最適化には使用できません。 B選択肢も不適切です。APIへのアクセスにおける流量の急増は、サービスがサーバーレスであろうとなかろうと常に基本サービスを負荷をかけます。API Gatewayがクライアントからのリクエストをスロットル(制限)し始めるのは、リクエストの送信が許容レートとバースト制限を超えた時です。この際、クライントは「429 Too Many Requests」のエラーメッセージを返される可能性があります。そんな時に効果的な対策は、新たなリクエストの送信をレート制限に基づいて制御するため、APIのためのスロットルとクオータを設定することです。 C選択肢も不適切です。Lambda@EdgeはAWS Lambdaの拡張であり、CloudFrontで提供されるコンテントをカスタマイズするためのコンピューティングサービスです。しかしながら、API Gatewayのパフォーマンスの改善や最適化については制御機能はない。 D選択肢が適切な答えです。APIへのリクエストが大量になるのを避けるために、APIのためのスロットルとクオータを設定すると良いです。`,
	subQuestions: [{
		id: 0,
		question: `あなたがAmazon API GatewayのAPI設計における全体的なパフォーマンス向上のために使用可能な手法は何ですか？`,
		options: [`AWS WAFを使用する`, `Lambda@Edge機能を使用する`, `サーバーレスアーキテクチャを展開する`, `APIステージやメソッドのターゲット制限を設ける`],
		multipleAnswers: false,
		correctAnswers: [`APIステージやメソッドのターゲット制限を設ける`],
		explanation: `全体的なパフォーマンスを向上させるためには、各々のAPIステージやメソッドのターゲット制限を設定することが重要です。`
	}, {
		id: 1,
		question: `Amazon API Gatewayにて、顧客からのリクエストを制御するために使用可能な手法は何ですか？`,
		options: [`APIキャッシュを有効にする`, `使用計画を活用する`, `AWS WAFと地域毎のWebACLをAPI GatewayのAPIステージに関連付け、レートベースのルールを適用する`, `LambdaとApplication Auto Scaling Groupで負荷に基づいて並列処理を可能にする`],
		multipleAnswers: false,
		correctAnswers: [`使用計画を活用する`],
		explanation: `顧客からのリクエストをリクエストレートやクオータ制に基づいてコントロールするための使用計画を活用することが効果的です。`
	}, {
		id: 2,
		question: `Amazon API GatewayのAPI設計において、APIのレスポンス時間の向上のために使用可能な手法は何ですか？`,
		options: [`AWS WAFを使用する`, `APIキャッシュを有効にする`, `CloudFrontの分散システムとLambda@Edge 機能を API Gatewayと結びつける`, `サーバーレスアーキテクチャを展開する`],
		multipleAnswers: false,
		correctAnswers: [`APIキャッシュを有効にする`],
		explanation: `APIのレスポンス時間の向上のためには、APIキャッシュを有効にすることが有効です。`
	}, {
		id: 3,
		question: `AWS WAFはどのような役割を果たしますか？`,
		options: [`APIの使用計画を制御する`, `Web ACLルールを用いてAWSサービスを外部の脅威から保護する`, `API GatewayのAPIのパフォーマンスや最適化を行う`, `APIステージやメソッドのターゲット制限を設ける`],
		multipleAnswers: false,
		correctAnswers: [`Web ACLルールを用いてAWSサービスを外部の脅威から保護する`],
		explanation: `AWS WAF(Web Application Firewall)はWebアプリケーション向けのファイアウォールであり、Web ACLルールを用いてAWSサービスを外部の脅威から保護する役割を果たします。APIの使用計画を制御する能力はありません。`
	}, {
		id: 4,
		question: `Lambda@Edgeはどのような役割を果たしますか？`,
		options: [`CloudFrontで提供されるコンテントをカスタマイズする`, `APIの使用計画を制御する`, `APIステージやメソッドのターゲット制限を設ける`, `API GatewayのAPIのパフォーマンスや最適化を行う`],
		multipleAnswers: false,
		correctAnswers: [`CloudFrontで提供されるコンテントをカスタマイズする`],
		explanation: `Lambda@EdgeはAWS Lambdaの拡張であり、CloudFront(コンテンツ配信ネットワークサービス)で提供されるコンテントをカスタマイズするためのコンピューティングサービスです。API Gatewayのパフォーマンスの改善や最適化については制御機能はない。`
	}]
}, {
	id: 28,
	question: `ある企業が、サーバープロビジョニング、パッチの適用、バックアップ等の作業を簡素化し、チームを開放する為にオンプレミスのMariaDBデータベースをAWSに移行することにしました。企業は、AWSのデータベースには組み込みのセキュリティ機能、連続バックアップ、サーバーレスの計算、複数の読み取りレプリカ、自動化されたマルチリージョンレプリケーション、他の商用データベースよりも低いコスト、そして他のAWSサービスとの統合が含まれていることを求めています。あなたはソリューションアーキテクトとして、データベースを迅速で安全にAWSに移行するためのアドバイスと支援を求められていました。彼らは、移行中にソースデータベースがフル稼働し、データベースに依存するアプリケーションのダウンタイムが最小限になるようにという条件を設けています。これらの目標を達成するために、どのようなアーキテクチャの変更を進めますか？`,
	options: [`ターゲットDBとしてAWS内のAmazon Aurora Mysqlを設定。Database Migration Service (DMS) のレプリケーションインスタンスを作成し、DMSエンドポイントを生成。DMSタスクを設定し、ソースデータベースとしてのオンプレミスのMariaDBからデータを移行し、確認を行う。`, `ターゲットDBとしてAWS内のDynamoDBを設定。Database Migration Service (DMS) のレプリケーションインスタンスを作成し、DMSエンドポイントを生成。DMSタスクを設定し、ソースデータベースとしてのオンプレミスのMariaDBからデータを移行し、確認を行う。`, `ターゲットDBとしてAWS内のAmazon Aurora Serverless MySQLを設定。Database Migration Service (DMS) のレプリケーションインスタンスを作成し、DMSエンドポイントを生成。DMSタスクを設定し、ソースデータベースとしてのオンプレミスのMariaDBからデータを移行し、確認を行う。`, `ターゲットDBとしてAWS内のAmazon Aurora Serverless PostgreSQLを設定。Database Migration Service (DMS) のレプリケーションインスタンスを作成し、DMSエンドポイントを生成。DMSタスクを設定し、ソースデータベースとしてのオンプレミスのMariaDBからデータを移行し、確認を行う。`],
	multipleAnswers: false,
	correctAnswers: [`ターゲットDBとしてAWS内のAmazon Aurora Mysqlを設定。Database Migration Service (DMS) のレプリケーションインスタンスを作成し、DMSエンドポイントを生成。DMSタスクを設定し、ソースデータベースとしてのオンプレミスのMariaDBからデータを移行し、確認を行う。`],
	explanation: `選択肢Aが正解です。Amazon Aurora Mysqlは企業が求める全ての要件を満たすためのターゲットデータベースです。そして、AWS Database Migration Service (AWS DMS)はデータベースを迅速、安全に移行するという要求も満たします。移行中にソースデータベースが稼働し続け、データベース依存型のアプリケーションのダウンタイムが最小化されます。選択肢Bは不正解です。MariaDBからNoSQLのDynamoDBへの移行は簡単ではないため、速やかで安全とは言えません。また、この企業にはNoSQL DynamoDBの使用を正当化する要件は提示されていません。選択肢CとDは不正解です。これはAmazon Aurora Serverless (MySQLとPostgreSQLバージョン)がオーバースペックな解決策であり、すべての要件はAWS Auroraの使用で満たせます。なお、この企業からはオートスケーリングやダイナミックなロードバランシングなどの要件は要求されていません、したがってこれらは最良かつ最も最適化された解決策にはなりません。`,
	subQuestions: [{
		id: 1,
		question: `次のうち、Amazon DMSが主に使用されるユースケースはどれですか？`,
		options: [`データベースマイグレーション`, `データベースのバックアップとリカバリ`, `データベースのパフォーマンス監視`, `データベースのセキュリティ管理`],
		multipleAnswers: false,
		correctAnswers: [`データベースマイグレーション`],
		explanation: `Amazon DMS（Database Migration Service）は、主にオンプレミスからAWSへのデータベースマイグレーション、あるいはAWS内のデータベース間のマイグレーションに使用されます。`
	}, {
		id: 2,
		question: `Amazon Auroraはどのようなデータベースの種類に該当しますか？`,
		options: [`リレーショナルデータベース`, `NoSQLデータベース`, `インメモリデータベース`, `オブジェクトデータベース`],
		multipleAnswers: false,
		correctAnswers: [`リレーショナルデータベース`],
		explanation: `Amazon AuroraはAWSが開発したリレーショナルデータベース（RDB）で、MySQLとPostgreSQLとの互換性を持ちます。`
	}, {
		id: 3,
		question: `AWSによるデータベースマイグレーションが実行中でもソースデータベースは稼働し続ける理由は何ですか？`,
		options: [`マイグレーション中はソースデータベースに変更を加えることはできないため`, `マイグレーション中はソースデータベースのみアクセス可能で、新たなデータベースにはアクセスできないため`, `ソースデータベースが稼働し続けることで、マイグレーション中のダウンタイムを最小限に保つため`, `AWSがソースデータベースの稼働状況を監視し続けるため`],
		multipleAnswers: false,
		correctAnswers: [`ソースデータベースが稼働し続けることで、マイグレーション中のダウンタイムを最小限に保つため`],
		explanation: `AWSのデータベースマイグレーションサービスは、マイグレーションプロセス中でもソースデータベースが稼働し続け、顧客がそれを利用し続けられるように設計されています。これにより、マイグレーションのダウンタイムが最小限に抑えられます。`
	}, {
		id: 4,
		question: `AWSのDatabase Migration Serviceにおいてレプリケーションインスタンスの役割は何ですか？`,
		options: [`変更データのキャプチャと適用`, `データベースのバックアップと復元`, `データベースへのクエリの送信`, `データベースの監視と管理`],
		multipleAnswers: false,
		correctAnswers: [`変更データのキャプチャと適用`],
		explanation: `Amazon DMSのレプリケーションインスタンスは、変更データをソースデータベースからキャプチャし、ターゲットデータベースに適用する役割を担っています。これにより、ソースとターゲットのデータベースが同期されます。`
	}, {
		id: 5,
		question: `次のうち、MariaDBからAmazon Auroraへの移行が適切である理由は何ですか？`,
		options: [`両者ともAmazonが開発したデータベースであるため`, `両者ともリレーショナルデータベースであり、互換性が高いため`, `MariaDBは古いテクノロジーであり、Auroraの方が新しいため`, `MariaDBはオープンソースであり、Auroraは商用提供されているため`],
		multipleAnswers: false,
		correctAnswers: [`両者ともリレーショナルデータベースであり、互換性が高いため`],
		explanation: `MariaDBとAmazon Auroraは、両者ともリレーショナルデータベースであり、互換性が高いです。Amazon AuroraはMySQLと互換性があり、MariaDBはMySQLから派生したデータベースであるため、相互間のデータの移行がスムーズに行えます。`
	}]
}, {
	id: 29,
	question: `無料の映像ストリーミング企業が徐々に認知度を上げていく中で、問題も同時に増えてきました。企業は自社で大量のペタバイト（PB）のメディアライブラリデータを保管しているデータセンターのコストが高すぎてコスト効率が悪いと感じ始めています。また、メディアファイルをホット（バイラル映像 - 頻繁にアクセス）、ウォーム（頻繁またはたまにアクセス）、クール（あまりアクセスしないものやアーカイブアクセス）の各層の保管に自動的に対応する柔軟性も欠如しています。充実したメディアライブラリは消費者が容易にアクセスし、高可用性が求められるべきであり、あなたはエンタープライズアーキテクチャとして、これらの問題をすべて解決し、データを安全にAWSに移行するという課題を与えられました。このタスクは90日間で達成する必要があり、既存のサービスやパフォーマンスに影響を与えないようにすることが要請されています。これらの問題を解決するための提案は何でしょうか？`,
	options: [`まず、大規模なファイルを早く、安全に移行するために, Amazon Kinesis Video Streamsを使用し、オンプレミスのデータセンターからAmazon S3へメディアファイルをアップロードします。次に、Amazon S3 Intelligent Tieringを用いればホット、ウォーム、クールの各層に基づいたより閲覧数の柔軟性を実現できます。同時に、高可用性の確保のためにAmazon CloudFrontを導入します。`, `迅速かつ安全な移行を実現するために、AWS Storage Gatewayを用いてオンプレミスのデータをクラウドに複製します。これによりハイブリッドクラウドストレージサービスを実現し、オンプレミスからほぼ無限のクラウドストレージへのアクセスが可能となります。さらに、Amazon S3 Intelligent Tieringを用いて、各層に基づいたより良い閲覧数の柔軟性を持つメディアファイルのストレージクラスを最適化します。`, `大規模なファイルを早く、安全にAmazon S3に移動するために、複数のAmazon Snowball Edge Storage Optimizedデバイスを同時に作動させます。それにより、Amazon S3 Intelligent Tieringを活用し、ホット、ウォーム、クールの各層に基づいてデータを自動的にストレージクラスに格納する手段の最適化が可能となります。`, `AWS Direct Connectを設定し、AWS DataSyncを設定してAWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化します。そして、Amazon S3 Intelligent Tieringを使用し、ホット、ウォーム、クールの各層に基づいてデータを自動的にストレージクラスへ配置する最適化を行います。`],
	multipleAnswers: false,
	correctAnswers: [`大規模なファイルを早く、安全にAmazon S3に移動するために、複数のAmazon Snowball Edge Storage Optimizedデバイスを同時に作動させます。それにより、Amazon S3 Intelligent Tieringを活用し、ホット、ウォーム、クールの各層に基づいてデータを自動的にストレージクラスに格納する手段の最適化が可能となります。`],
	explanation: `正解の選択肢はCです。 Aの選択肢は不正解となります。なぜなら、Kinesis Video Streamsはエッジデバイス、スマートフォン、セキュリティカメラ、レーダー、リーダー、ドローン、衛星、ドライブレコーダー、深度センサーなどのデータソースからデータを取り込むことができますが、それらのデバイスからAWSにメディアをストリームする際に高いネットワーク帯域を必要とします。これは既存のパフォーマンスに影響を与える可能性があります。また、Kinesis Video Streamsはオンラインで動作するため、ストリーミングコンテンツへの既存モデルのパフォーマンスが低下します。 Bの選択肢も不正解です。AWS Storage Gatewayは、AWSへのオンプレミスデータのバックアップや、ハイブリッドクラウドモデルでデータへのアクセスを提供する際に使用されます。しかし、これはオンプレミスがクラウドストレージに拡大されることになるため、ストレージコストが増加する可能性があります。 Cの選択肢が正解となります。Amazon Snowball Edge Storage Optimizedデバイスを使用すると、ネットワーク帯域を使用せずに、切り離されたエッジ環境で動作しながらペタバイト規模のデータを移動することが可能です。それにより、既存のモデルはそのまま維持されます。 Dの選択肢は不正解です。AWS DataSyncはオンラインデータ転送サービスであり、インターネットやAWS Direct Connectを使用して大量のデータをAWSストレージサービス間で複製するプロセスを簡易化、自動化、高速化します。しかし、AWS Direct Connectの設定は複雑で時間がかかるプロセスであり、場合によっては90日以上かかることもあります。したがって、メディアファイルを90日以内にAWSに移動することは難しいです。 参考：https://aws.amazon.com/jp/snow/`,
	subQuestions: [{
		id: 1,
		question: `Amazon Kinesis Video Streamsは以下のうちどれに適用しますか？`,
		options: [`エッジデバイスやスマートフォンからAWSにメディアをストリームする。`, `大量のデータを早く、安全にAmazon S3に移動する。`, `オンプレミスのデータをAWSに複製し、ハイブリッドクラウドストレージサービスを実現する。`, `AWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化する。`],
		multipleAnswers: false,
		correctAnswers: [`エッジデバイスやスマートフォンからAWSにメディアをストリームする。`],
		explanation: `Amazon Kinesis Video Streamsはエッジデバイス、スマートフォン、セキュリティカメラ、レーダー、リーダー、ドローン、衛星、ドライブレコーダー、深度センサーなどのデータソースからデータを取り込むことができます。これらのデバイスからAWSにメディアをストリームするために高いネットワーク帯域を必要とします。`
	}, {
		id: 2,
		question: `AWS Storage Gatewayは以下のうちどれに適用しますか？`,
		options: [`エッジデバイスやスマートフォンからAWSにメディアをストリームする。`, `大量のデータを早く、安全にAmazon S3に移動する。`, `オンプレミスのデータをAWSに複製し、ハイブリッドクラウドストレージサービスを実現する。`, `AWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化する。`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスのデータをAWSに複製し、ハイブリッドクラウドストレージサービスを実現する。`],
		explanation: `AWS Storage Gatewayは、AWSへのオンプレミスデータのバックアップや、ハイブリッドクラウドモデルでデータへのアクセスを提供する際に使用されます。しかし、これはオンプレミスがクラウドストレージに拡大されることになるため、ストレージコストが増加する可能性があります。`
	}, {
		id: 3,
		question: `Amazon Snowball Edge Storage Optimizedデバイスの使用目的は何ですか？`,
		options: [`エッジデバイスやスマートフォンからAWSにメディアをストリームする。`, `大量のデータを早く、安全にAmazon S3に移動する。`, `オンプレミスのデータをAWSに複製し、ハイブリッドクラウドストレージサービスを実現する。`, `AWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化する。`],
		multipleAnswers: false,
		correctAnswers: [`大量のデータを早く、安全にAmazon S3に移動する。`],
		explanation: `Amazon Snowball Edge Storage Optimizedデバイスを使用すると、ネットワーク帯域を使用せずに、切り離されたエッジ環境で動作しながらペタバイト規模のデータを移動することが可能です。それにより、既存のモデルはそのまま維持されます。`
	}, {
		id: 4,
		question: `AWS Direct ConnectとAWS DataSyncの組み合わせは何に最適ですか？`,
		options: [`エッジデバイスやスマートフォンからAWSにメディアをストリームする。`, `大量のデータを早く、安全にAmazon S3に移動する。`, `オンプレミスのデータをAWSに複製し、ハイブリッドクラウドストレージサービスを実現する。`, `AWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化する。`],
		multipleAnswers: false,
		correctAnswers: [`AWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化する。`],
		explanation: `AWS DataSyncはオンラインデータ転送サービスであり、インターネットやAWS Direct Connectを使用して大量のデータをAWSストレージサービス間で複製するプロセスを簡易化、自動化、高速化します。しかし、AWS Direct Connectの設定は複雑で時間がかかるプロセスであり、場合によっては90日以上かかることもあります。`
	}, {
		id: 5,
		question: `Amazon S3 Intelligent Tieringはどのような機能ですか？`,
		options: [`データをホット、ウォーム、クールの各層に基づいて自動的にストレージクラスに格納する。`, `エッジデバイスやスマートフォンからAWSにメディアをストリームする。`, `オンプレミスのデータをAWSに複製し、ハイブリッドクラウドストレージサービスを実現する。`, `AWSのストレージサービスへオンプレミスからのデータ転送を自動化、高速化する。`],
		multipleAnswers: false,
		correctAnswers: [`データをホット、ウォーム、クールの各層に基づいて自動的にストレージクラスに格納する。`],
		explanation: `Amazon S3 Intelligent Tieringは、ホット、ウォーム、クールの各層に基づいてデータを自動的にストレージクラスへ配置することが可能です。これにより、データの利用頻度によってコストを最適化することができます。`
	}]
}, {
	id: 45,
	question: `ある企業では、アプリケーションがAWS上で稼働しており、そのアプリケーションのログデータがS3やCloudWatch、Kinesis Data Firehoseのような様々なAWSサービスに保存されています。チームは、これらのログに対しリアルタイムな監視機能を持つ新たな検索・分析エンジンを構築することになりました。データが一旦検索・分析エンジンにインデックスされると、SQL系のツールを使って価値のあるデータを特定・取り出すことが可能となります。さらに、検索エンジンはAWSの管理下にあるべきです。このソリューションはどのように設計すべきでしょうか？`,
	options: [`Amazon Redshiftを使用してクラスターを作り、S3やCloudWatch、Kinesis Data Firehoseからデータを取り込むことで、Redshiftデータレイクで必要なデータを検出し、さらに標準的なSQLコマンドを利用します。`, `Amazon Athenaにデータを取り込み、Athenaが管理するデータに対して通常のSQLクエリを行なうことで、Amazon QuickSightを使ってデータのビジュアライズを行います。`, `Amazon EMRクラスターをセットアップし、インデックス用のデータをロードします。ここでEMRクラスター内のデータに対してSQLによるクエリを実行することで、分析を行います。`, `Amazon OpenSearch Serviceのドメインを設定し、OpenSearch Serviceドメインにデータをロードします。そしてSQLを使ってデータのクエリを行います。`],
	multipleAnswers: false,
	correctAnswers: [`Amazon OpenSearch Serviceのドメインを設定し、OpenSearch Serviceドメインにデータをロードします。そしてSQLを使ってデータのクエリを行います。`],
	explanation: `選択肢Aは適切ではありません。なぜなら、Amazon Redshiftは完全に管理されるペタバイト規模のデータウェアハウスサービスであり、管理された検索エンジンではないからです。Redshiftは、機械学習、ビジネス分析などのユースケースに適しています。しかしながら、RedshiftはCloudWatchやKinesis Data Firehoseから直接データを取り込むことはできません。選択肢Bも適切ではありません。なぜなら、Amazon Athenaは検索と分析エンジンではないためです。また、CloudWatchやKinesis Data Firehoseからのデータを直接クエリすることはできません。選択肢Cも適切ではありません。というのも、Amazon EMRはApache HadoopとApache Sparkに基づく大規模なデータ処理フレームワークであり、本問で要求されているような検索・分析エンジンとは異なるからです。選択肢Dは正解です。Amazon OpenSearchは、要求されている検索・分析ソリューションとして適切なAWS管理サービスです。また、データをクエリするためのSQLもサポートしています。`,
	subQuestions: [{
		id: 1,
		question: `Amazon Redshiftは何のサービスでしょうか？`,
		options: [`完全に管理されるペタバイト規模のユーザーデータベースサービス`, `完全に管理されるペタバイト規模のデータウェアハウスサービス`, `完全に管理されるペタバイト規模のフレームワークサービス`, `完全に管理されるペタバイト規模のネットワークサービス`],
		multipleAnswers: false,
		correctAnswers: [`完全に管理されるペタバイト規模のデータウェアハウスサービス`],
		explanation: `Amazon Redshiftは完全に管理されるペタバイト規模のデータウェアハウスサービスであり、機械学習、ビジネス分析などのユースケースに適しています。`
	}, {
		id: 2,
		question: `Amazon Athenaは何のサービスでしょうか？`,
		options: [`オンデマンドでデータをクエリするサービス`, `リアルタイムでデータをストリーミングするサービス`, `データを保存、検索、分析するためのNoSQLデータベースサービス`, `大規模データ処理ワークロードを実行するクラウドコンピューティングサービス`],
		multipleAnswers: false,
		correctAnswers: [`オンデマンドでデータをクエリするサービス`],
		explanation: `Amazon Athenaは、S3に保存されたデータに対してSQLクエリをオンデマンドに実行するためのサービスです。直接SQLを使用してデータを分析でき、別途サーバーを設定する必要はありません。`
	}, {
		id: 3,
		question: `Amazon EMRは何のサービスでしょうか？`,
		options: [`完全に管理されるペタバイト規模のデータウェアハウスサービス`, `オンデマンドでデータをクエリするサービス`, `Apache HadoopとApache Sparkに基づく大規模なデータ処理フレームワーク`, `リアルタイムでデータをストリーミングするサービス`],
		multipleAnswers: false,
		correctAnswers: [`Apache HadoopとApache Sparkに基づく大規模なデータ処理フレームワーク`],
		explanation: `Amazon EMRはApache HadoopとApache Sparkに基づく大規模なデータ処理フレームワークで、汎用のビッグデータ処理、分析、およびレポートを実行します。`
	}, {
		id: 4,
		question: `Amazon OpenSearch Serviceは何のサービスでしょうか？`,
		options: [`リアルタイムでデータをインデックス化、検索、分析するサービス`, `完全に管理されるペタバイト規模のデータウェアハウスサービス`, `Apache HadoopとApache Sparkに基づく大規模なデータ処理フレームワーク`, `オンデマンドでデータをクエリするサービス`],
		multipleAnswers: false,
		correctAnswers: [`リアルタイムでデータをインデックス化、検索、分析するサービス`],
		explanation: `Amazon OpenSearch Service（以前のAmazon Elasticsearch Serviceとして知られる）は、リアルタイムでデータをインデックス化、検索、分析するためのフルマネージドのサービスです。このサービスはAmazon CloudWatch Logsと統合されており、運用ログのモニタリング、分析、トラブルシューティングに使用されます。`
	}, {
		id: 5,
		question: `Amazon OpenSearch Serviceはどのようなクエリ言語をサポートしていますか？`,
		options: [`SQL`, `NoSQL`, `Python`, `C#`],
		multipleAnswers: false,
		correctAnswers: [`SQL`],
		explanation: `Amazon OpenSearch Serviceは、データをクエリするためのSQLをサポートしています。これにより、データ分析やデータ可視化などの作業が簡単になります。`
	}]
}, {
	id: 46,
	question: `あるIT事業者がAWS Organizationsを使って多数のアカウントの管理を行っています。年間セキュリティ検査の結果、非常に多くのユーザーが持っている権限が必要以上であることがわかりました。セキュリティチーフから、AWS Organizations内の全ユーザーに対して最小限のアクセス権限を適用するよう頼まれました。ただし、過去半年間でユーザーがアクセスしていたリソースの権限は除去しないように指示されました。ユーザーのアクセスリソースを確認するために共有する前に、AWS Organizationsの権限を微調整するためには、どのレポートを参照するべきでしょうか？`,
	options: [`A. AWS Organizationsの管理アカウントのログイン資格情報を利用してAWS IAMコンソールにログインし、最後にアクセスした情報を取得し、ユーザーがアクセスしたリソースの一覧を調査します。`, `B. AWS Configの組織アグリゲーターを利用して、AWS Organizations内でユーザーがアクセスしたリソースの一覧を調査します。`, `C. AWS Trusted Advisorの組織ビューを利用して、AWS Organizations内の全ユーザーのリソースアクセス一覧を調査します。`, `D. AWS Control TowerとAWS Organizationsを組み合わせて、AWS Organizations内の全ユーザーのリソースアクセス一覧を調査します。`],
	multipleAnswers: false,
	correctAnswers: [`A. AWS Organizationsの管理アカウントのログイン資格情報を利用してAWS IAMコンソールにログインし、最後にアクセスした情報を取得し、ユーザーがアクセスしたリソースの一覧を調査します。`],
	explanation: `「最終アクセス情報」は全てのユーザーとアカウントに設定された権限を微調整するためにAWS Organization内で使われます。これによりユーザーに不必要な権限が設定されているか、またはユーザーが他の領域に移った場合に不要な権限が設定されていないかをチェックが行えます。最終アクセス情報を基に利用されていない余計な権限を削除すれば、「最小限の権限」のベストプラクティスに準拠できます。選択肢Bは誤りです。AWS ConfigはAWSリソースの設定変更の監視と記録に利用しますが、ユーザーがアクセスしたリソースの一覧を提供しません。組織アグリゲーターはAWS Organizations内の全てのアカウントからAWS Configの設定と準拠データを収集します。選択肢Cは誤りです。AWS Trusted Advisorはリソースの評価とコスト最適化、パフォーマンス、セキュリティ、耐障害性、サービスリミットに関するベストプラクティスのアドバイスを行うツールです。だがAWSクラウドのユーザーがアクセスしたリソースの一覧を取得することはできません。選択肢Dは誤りです。AWS Control TowerはAWS Organizations内のセキュリティと横断的な権限適用の確認に役立ちますが、AWS Organizations内でユーザーがアクセスしたリソースの一覧を取得することはできません。AWS Organizationsおよび最終アクセス情報に関する詳細については、以下のURLをご覧ください。`,
	subQuestions: [{
		id: 1,
		question: `AWS Organizationsでユーザーの「最小限の権限」を確保するために参照する情報は何ですか？`,
		options: [`A. 最終アクセス情報`, `B. AWS Configの設定変更`, `C. AWS Trusted Advisorのアドバイス`, `D. AWS Control Towerのセキュリティ確認`],
		multipleAnswers: false,
		correctAnswers: [`A. 最終アクセス情報`],
		explanation: `「最終アクセス情報」は全てのユーザーとアカウントに設定された権限を微調整するためにAWS Organization内で使われます。これにより、「最小限の権限」のベストプラクティスに準拠できます。`
	}, {
		id: 2,
		question: `AWS Organizationsでユーザーがアクセスしたリソースの一覧を取得するためにはどのツールを使用するべきですか？`,
		options: [`A. AWS IAMコンソール`, `B. AWS Configの組織アグリゲーター`, `C. AWS Trusted Advisorの組織ビュー`, `D. AWS Control TowerとAWS Organizationsの組み合わせ`],
		multipleAnswers: false,
		correctAnswers: [`A. AWS IAMコンソール`],
		explanation: `AWS IAMコンソールを使い、ログイン資格情報を利用して最後にアクセスした情報を取得し、ユーザーがアクセスしたリソースの一覧を調査します。`
	}, {
		id: 3,
		question: `AWS Trusted Advisorはどのような機能を持つツールですか？`,
		options: [`A. リソースの評価とコスト最適化を行う`, `B. ユーザーがアクセスしたリソースの一覧を提供する`, `C. AWSリソースの設定変更の監視と記録を行う`, `D. AWS IAMコンソールの機能を強化する`],
		multipleAnswers: false,
		correctAnswers: [`A. リソースの評価とコスト最適化を行う`],
		explanation: `AWS Trusted Advisorはリソースの評価とコスト最適化、パフォーマンス、セキュリティ、耐障害性、サービスリミットに関するベストプラクティスのアドバイスを行うツールです。`
	}, {
		id: 4,
		question: `AWS Configはどのように利用されますか？`,
		options: [`A. AWSリソースの設定変更の監視と記録`, `B. 最小限の権限の確保と適用`, `C. コスト最適化とパフォーマンス向上`, `D. ユーザーがアクセスしたリソースの一覧取得`],
		multipleAnswers: false,
		correctAnswers: [`A. AWSリソースの設定変更の監視と記録`],
		explanation: `AWS ConfigはAWSリソースの設定変更の監視と記録に利用します。組織アグリゲーターはAWS Organizations内の全てのアカウントからAWS Configの設定と準拠データを収集します。`
	}, {
		id: 5,
		question: `AWS Control Towerはどのような利用シーンのツールですか？`,
		options: [`A. AWSリソースの設定変更の監視と記録`, `B. ユーザーがアクセスしたリソースの一覧取得`, `C. AWS Organizations内のセキュリティと横断的な権限適用の確認`, `D. コスト最適化とパフォーマンス向上`],
		multipleAnswers: false,
		correctAnswers: [`C. AWS Organizations内のセキュリティと横断的な権限適用の確認`],
		explanation: `AWS Control TowerはAWS Organizations内のセキュリティと横断的な権限適用の確認に役立ちます。しかし、ユーザーがアクセスしたリソースの一覧を取得することはできません。`
	}]
}, {
	id: 47,
	question: `IT会社はオンプレミスとAWS間でハイブリッド接続を保持しており、AWS Direct Connectリンクを活用しています。オンプレミスのユーザーがAmazon S3 バケットに保存されている業務データをダウンロードする必要があります。アクセスの提供のために、IT会社はIAMユーザーを新たに作成したくない一方、オンプレミスで運用しているSAML対応のIdentity provider（IdP）で生成された既存の認証情報を活用したいと考えています。ユーザーがAmazon S3バケットにアクセスする際には何の手順が必要でしょうか？`,
	options: [`1. ユーザーがIdPに認証要求を送信します 2. IdPがSTSに代わりSAMLアサーションを送信し、AssumeRolewithSAML APIを利用します 3. STSは一時的なセキュリティクレデンシャルをIdPに返します 4. IdPはこのセキュリティクレデンシャルをユーザーに送信し、Amazon S3バケットへのアクセスを可能にします`, `1. ユーザーがIdPに認証要求を送信します 2. IdPがユーザーにSAMLアサーションを送信します 3. ユーザーはこのSAMLアサーションをAssumeRolewithSAML APIを利用してSTSに送信します 4. STSはユーザーがAmazon S3バケットにアクセスできる一時的なセキュリティクレデンシャルを返します`, `1. ユーザーがIdPに認証要求を送信します 2. IdPがユーザーにSAMLアサーションを送信します 3. ユーザーはこのSAMLアサーションをAssumeRoleWithWebIdentity APIを利用してSTSに送信します 4. STSはユーザーがAmazon S3バケットにアクセスできる一時的なセキュリティクレデンシャルを返します`, `1. ユーザーがIdPに認証要求を送信します 2. IdPがSTSに代わりSAMLアサーションを送信し、AssumeRoleWithWebIdentity APIを利用します 3. STSは一時的なセキュリティクレデンシャルをIdPに返します 4. IdPはこのセキュリティクレデンシャルをユーザーに送信し、Amazon S3バケットへのアクセスを可能にします`],
	multipleAnswers: false,
	correctAnswers: [`1. ユーザーがIdPに認証要求を送信します 2. IdPがユーザーにSAMLアサーションを送信します 3. ユーザーはこのSAMLアサーションをAssumeRolewithSAML APIを利用してSTSに送信します 4. STSはユーザーがAmazon S3バケットにアクセスできる一時的なセキュリティクレデンシャルを返します`],
	explanation: `AWSリソースにアクセスするためにはアイデンティティプロバイダを利用することが可能であり、IAMユーザーを新たに作成する必要はありません。AWSアカウントとアイデンティティプロバイダ（IdP）との間には信頼関係を確立する必要があります。IAMはOpenID Connect（OIDC）またはSAML 2.0（Security Assertion Markup Language 2.0）と互換性のあるIdPをサポートしています。既存のIdPが会社内に存在する場合、ユーザーは新たなIAMで生成した認証情報の使用ではなく、既存の認証情報を活用してAWSリソースにアクセスすることが可能です。オンプレミスからAmazon S3バケットへのアクセスを行うためには次の手順が必要です、1. オンプレミスのユーザーはローカルのアイデンティティプロバイダで認証します。このIdPはAWSと互換性のあるSAML2をサポートする必要があります。2. IdPがユーザーにSAMLアサーションを送信します。3. ユーザーはこのSAMLアサーションをAWS STSに送信し、Amazon S3バケットにアクセスするための一時的な認証情報をユーザーに返します。4. ユーザーは、この認証情報を使用してAmazon S3バケットにアクセスし、Amazon S3バケットに保存されている業務データをダウンロードすることができます。オプションAは、LDAP（Lightweight Directory Access Protocol）ベースのアイデンティティプロバイダーはSTSに直接リクエストを送ることはありませんので、不適切です。オプションCは、クライアントはAssume Role With Web Identity APIではなく、Assume Role with SAML APIを使用してSAMLアサーションをSTSに送るべきなので、不適当です。オプションDは、LDAPベースのアイデンティティプロバイダーがSTSに直接リクエストを送るとは限らないため不適切です。そしてクライアントは、SAMLアサーションをSTSに送る際にはAssume Role with SAML APIを使用すべきです。SAMLアイデンティティプロバイダの使用によるユーザーへのアクセス提供についての詳細は以下のURLを参照してください、https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html`,
	subQuestions: [{
		id: 1,
		question: `Amazon S3 バケットにアクセスするための認証情報の取得方法について正しいのはどれか？`,
		options: [`IAMユーザーアカウントを新たに作成する`, `既存のIdPが生成した認証情報を活用する`, `Amazon S3バケットに直接アクセスする`, `IAM roleを新たに作成する`],
		multipleAnswers: false,
		correctAnswers: [`既存のIdPが生成した認証情報を活用する`],
		explanation: `ユーザーは新たなIAMで生成した認証情報の使用ではなく、既存の認証情報を活用してAWSリソースにアクセスすることが可能です。`
	}, {
		id: 2,
		question: `SAML対応のIdentity provider（IdP）が生成した既存の認証情報を活用する際の手順として正しいのはどれか？`,
		options: [`ユーザーがIdPに認証要求を送信し、IdPがユーザーにSAMLアサーションを送信する`, `IdPがユーザーにSAMLアサーションを送信し、ユーザーがこのSAMLアサーションをAssumeRolewithSAML APIを利用してSTSに送信する`, `IdPがSTSに代わりSAMLアサーションを送信し、STSは一時的なセキュリティクレデンシャルをIdPに返す`, `STSが一時的なセキュリティクレデンシャルをIdPに返し、IdPはこのセキュリティクレデンシャルをユーザーに送信する`],
		multipleAnswers: false,
		correctAnswers: [`ユーザーがIdPに認証要求を送信し、IdPがユーザーにSAMLアサーションを送信する`],
		explanation: `ユーザーは自身のアイデンティティプロバイダ(IdP)で認証する。そしてそのIdPはユーザーに対してSAML アサーションを送信します。`
	}, {
		id: 3,
		question: `SAMLアサーションの送信先と該当するAPIはどれか？`,
		options: [`SAMLアサーションはAWS STSに送信し、AssumeRolewithSAML APIを使用する`, `SAMLアサーションはIdPに送信し、AssumeRoleWithWebIdentity APIを使用する`, `SAMLアサーションはAWS STSに送信し、AssumeRoleWithWebIdentity APIを使用する`, `SAMLアサーションはIdPに送信し、AssumeRolewithSAML APIを使用する`],
		multipleAnswers: false,
		correctAnswers: [`SAMLアサーションはAWS STSに送信し、AssumeRolewithSAML APIを使用する`],
		explanation: `ユーザーはSAMLアサーションをAssumeRolewithSAML APIを利用してAWS STSに送信します。`
	}, {
		id: 4,
		question: `IAMはどのようなアイデンティティプロバイダをサポートしているか？`,
		options: [`OpenID Connect（OIDC）またはSAML 2.0（Security Assertion Markup Language 2.0）と互換性のあるIdPをサポート`, `LDAP（Lightweight Directory Access Protocol）ベースのIdPをサポート`, `OAuth 2.0と互換性のあるIdPをサポート`, `OpenID Connect（OIDC）とLDAP（Lightweight Directory Access Protocol）ベースのIdPをサポート`],
		multipleAnswers: false,
		correctAnswers: [`OpenID Connect（OIDC）またはSAML 2.0（Security Assertion Markup Language 2.0）と互換性のあるIdPをサポート`],
		explanation: `IAMはOpenID Connect（OIDC）またはSAML 2.0（Security Assertion Markup Language 2.0）と互換性のあるIdPをサポートしています。`
	}, {
		id: 5,
		question: `オンプレミスからAmazon S3バケットへアクセスするために最後に必要な認証情報をどこから取得するか？`,
		options: [`IdPから取得する`, `IAMから取得する`, `STSから取得する`, `AWS consoleから取得する`],
		multipleAnswers: false,
		correctAnswers: [`STSから取得する`],
		explanation: `ユーザーはSAMLアサーションをAWS STSに送信し、STSはAmazon S3バケットにアクセスするための一時的な認証情報をユーザーに返します。この認証情報を使用して、ユーザーはAmazon S3バケットにアクセスします。`
	}]
}, {
	id: 50,
	question: `新進の企業が世界各地に何千ものセンサーを展開しており、これらは4Kb未満の連続したデータログを送信し、これらのデータはリアルタイムで解析する必要があります。また、環境データのサマリは将来の参照のために保存する必要があります。企業は、このシステムをコスト効率よくAWSクラウドに展開するための管理されたソリューションを求めています。また、ソリューションは将来の拡大を考慮に入れて非常にスケーラブルであるべきです。これらの要件を満たすように何を設計すべきでしょうか？`,
	options: [`A. Amazon Kinesis Data Streamsを活用してストリーミングデータをキャプチャし、Apache FlinkによるKinesis Data Analyticsを用いてストリーミングデータを解析、そして処理されたデータをAmazon S3に保存。`, `B. Amazon Data Pipelineを利用してストリーミングデータをキャプチャし、Apache FlinkによるKinesis Data Analyticsを使用してストリーミングデータを解析、そして処理したデータをAmazon S3に保存。`, `C. Amazon Data Pipelineを利用してストリーミングデータをキャプチャし、Amazon S3にデータを保存し、Amazon Athenaを使用してデータを解析、そして解析されたデータを別のAmazon S3バケットに保存。`, `D. Amazon Kinesis Data Streamsを利用してストリーミングデータをキャプチャし、Amazon EC2インスタンスに渡す。Amazon EC2インスタンス上のKCLライブラリを使ってデータを解析し、解析されたデータをAmazon S3バケットに保存。`],
	multipleAnswers: false,
	correctAnswers: [`A. Amazon Kinesis Data Streamsを活用してストリーミングデータをキャプチャし、Apache FlinkによるKinesis Data Analyticsを用いてストリーミングデータを解析、そして処理されたデータをAmazon S3に保存。`],
	explanation: `A. の選択肢が正解です。Apache Flinkを用いたAmazon Kinesis Data Analyticsは、ストリーミングデータの解析のための完全にマネージドなサービスです。Amazon Kinesis Data Streamsは、データストリームをキャプチャ、処理、保存するための完全にマネージドなスケーラブルなサービスです。このケースでは、数千のセンサーからのストリーミングデータはリアルタイムにAmazon Kinesis Data Streamsでキャプチャできます。解析されたデータはAmazon S3に保存され、将来にわたってアクセス可能になります。これにより、コスト効率の良いスケーラブルなソリューションが実現可能になります。`,
	subQuestions: [{
		id: 1,
		question: `Amazon Kinesis Data Streamsは何をするサービスですか？`,
		options: [`ストリーミングデータをキャプチャ、処理、保存する`, `大規模データセットを安全に転送する`, `大規模データセットを解析する`, `大規模なウェブアプリケーションのホスティング`],
		multipleAnswers: false,
		correctAnswers: [`ストリーミングデータをキャプチャ、処理、保存する`],
		explanation: `Amazon Kinesis Data Streamsは、ストリーミングデータをリアルタイムにキャプチャ、処理、保存するための完全にマネージドなサービスです。`
	}, {
		id: 2,
		question: `Amazon Kinesis Data Analyticsは何をするサービスですか？`,
		options: [`ストリーミングデータをリアルタイムに解析する`, `非構造化データを解析する`, `大規模データセットを安全に転送する`, `大規模データセットを解析する`],
		multipleAnswers: false,
		correctAnswers: [`ストリーミングデータをリアルタイムに解析する`],
		explanation: `Amazon Kinesis Data Analyticsは、ストリーミングデータをリアルタイムに解析するための完全にマネージドなサービスです。これはApache Flinkを用いて行います。`
	}, {
		id: 3,
		question: `Apache Flinkは何をするツールですか？`,
		options: [`ストリーミングデータをリアルタイムに解析する`, `非構造化データを解析する`, `大規模データセットを安全に転送する`, `大規模データセットを解析する`],
		multipleAnswers: false,
		correctAnswers: [`ストリーミングデータをリアルタイムに解析する`],
		explanation: `Apache Flinkは、大規模で分散した環境でリアルタイムにストリーミングデータを解析するためのフレームワークです。これはAmazon Kinesis Data Analyticsで利用されます。`
	}, {
		id: 4,
		question: `Amazon S3は何をするサービスですか？`,
		options: [`オブジェクトストレージサービス`, `大規模なウェブアプリケーションのホスティング`, `大規模データセットを安全に転送する`, `ストリーミングデータをキャプチャ、処理、保存する`],
		multipleAnswers: false,
		correctAnswers: [`オブジェクトストレージサービス`],
		explanation: `Amazon S3（Simple Storage Service）はスケーラブルで大容量のデータを保存、取得するためのオブジェクトストレージサービスです。`
	}, {
		id: 5,
		question: `ストリーミングデータのリアルタイム解析と保存に最も適したAWSサービスの組み合わせは何ですか？`,
		options: [`Amazon Kinesis Data StreamsとAmazon Kinesis Data AnalyticsとAmazon S3`, `Amazon Data PipelineとApache FlinkとAmazon S3`, `Amazon Data PipelineとAmazon AthenaとAmazon S3`, `Amazon Kinesis Data StreamsとAmazon EC2とAmazon S3`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Kinesis Data StreamsとAmazon Kinesis Data AnalyticsとAmazon S3`],
		explanation: `Amazon Kinesis Data Streamsはストリーミングデータのキャプチャ、Amazon Kinesis Data Analyticsはそのデータのリアルタイム解析、そしてAmazon S3はデータの保存という各役割に最適なサービスです。`
	}]
}, {
	id: 51,
	question: `自動車メーカーが、AWS上で大規模なユーザーベースの管理のためにAWS管理Microsoft ADを展開しています。セキュリティチームは、ログインの失敗、ユーザーグループの変更等のADコントローラーのイベントログを取得し、リアルタイムで解析し、それぞれのイベントのトレンドや洞察を表示するダッシュボードを作りたいと考えています。 これらの要件を最も効率的に満たす解決策の設計は何でしょうか？`,
	options: [`A. ADコントローラからのイベントログをAmazon CloudWatch LogsとAmazon Kinesis Data Streamsを使ってAmazon Kinesis Data Analyticsにストリームし、Amazon Kinesis Firehoseを使って解析したイベントをAmazon S3 バケットに保存します。Amazon Quick Sightを使用して、Amazon S3に保存されたデータを基にトレンドのダッシュボードを作成します。`, `B. ADコントローラーからのイベントログをAmazon CloudWatch LogsとAWS Lambdaを使ってAmazon OpenSearch Serviceにストリームします。Amazon OpenSearch Serviceでイベントを解析し、Amazon OpenSearchダッシュボードで視覚化を作成します。`, `C. ADコントローラーからのイベントログをAmazon CloudWatch LogsとAmazon Kinesis Firehoseを使ってAmazon OpenSearch Serviceにストリームします。Amazon OpenSearch Serviceでイベントを分析し、Amazon OpenSearchダッシュボードで視覚化を作成します。`, `D. ADコントローラーからのイベントログをAmazon CloudWatch LogsとAmazon Kinesis Firehoseを使用してAmazon Kinesis Data Analyticsにストリームします。Amazon Kinesis Data Analyticsでイベントを分析し、Amazon Kinesis Firehoseを使用してAmazon Redshiftに結果を保存します。Amazon QuickSightを使用して、Amazon Redshiftに保存されたデータに基づいたトレンドのダッシュボードを作成します。`],
	multipleAnswers: false,
	correctAnswers: [`B. ADコントローラーからのイベントログをAmazon CloudWatch LogsとAWS Lambdaを使ってAmazon OpenSearch Serviceにストリームします。Amazon OpenSearch Serviceでイベントを解析し、Amazon OpenSearchダッシュボードで視覚化を作成します。`],
	explanation: `Bが正解です。 Amazon OpenSearch Serviceは、OpenSearchと旧版のAWS Elasticsearchをサポートする検索と分析エンジンのユースケース用のマネージドサービスです。分析したデータに基づいて視覚化を作成し、ダッシュボードを作成することができます。上記のケースでは、Amazon Managed Microsoft ADのイベントログはAmazon CloudWatchログを使用して取得できます。これらのログをリアルタイムでAmazon OpenSearchにプッシュするためには、AWS Lambdaが使用できます。Amazon OpenSearchではログが分析され、ログデータに基づいてダッシュボードが作成されます。 Aは不正解です。これは、Amazon Kinesis Data Streams、Amazon Kinesis Data Analytics、Amazon Kinesis Firehose、およびAmazon Quick Sightによるダッシュボードのセットアップなど、追加のサービスを展開するために必要となります。これらは追加のコストと管理作業を発生させます。 Cは不正解です。Amazon Kinesis Firehoseを使用すると、データはリアルタイムではなくほぼリアルタイムでAmazon OpenSearchサービスに送信されます。リアルタイムでは、データはAmazon OpenSearchに即座に送信されますが、ほぼリアルタイムでは、Amazon OpenSearchへのデータ送信に遅延が発生します。 Dは不正解です。Amazon Kinesis Firehoseを使用すると、データはリアルタイムではなくほぼリアルタイムでAmazon Kinesis Data Analyticsに送信されます。 Amazon OpenSearch Serviceを使用したイベントログの分析についての詳細情報は、以下のURLを参照してください。 https://aws.amazon.com/blogs/modernizing-with-aws/analyze-active-directory-event-logs- using-amazon-opensearch/`,
	subQuestions: [{
		id: 1,
		question: `Amazon OpenSearch Serviceは何をサポートするマネージドサービスですか？`,
		options: [`検索と分析エンジン`, `データベースエンジン`, `データウェアハウスエンジン`, `キャッシュエンジン`],
		multipleAnswers: false,
		correctAnswers: [`検索と分析エンジン`],
		explanation: `Amazon OpenSearch Serviceは検索と分析エンジンのユースケース用のマネージドサービスで、OpenSearchと旧版のAWS Elasticsearchをサポートします。`
	}, {
		id: 2,
		question: `Amazon Managed Microsoft ADのイベントログを取得するためにどのサービスを使用できますか？`,
		options: [`Amazon Kinesis Data Streams`, `Amazon Redshift`, `Amazon OpenSearch Service`, `Amazon CloudWatch Logs`],
		multipleAnswers: false,
		correctAnswers: [`Amazon CloudWatch Logs`],
		explanation: `Amazon Managed Microsoft ADのイベントログは、Amazon CloudWatchログを使用して取得できます。`
	}, {
		id: 3,
		question: `REALタイムでデータをAmazon OpenSearchにプッシュするためには、何が使用できますか？`,
		options: [`Amazon Kinesis Data Streams`, `AWS Lambda`, `Amazon Quick Sight`, `Amazon Kinesis Firehose`],
		multipleAnswers: false,
		correctAnswers: [`AWS Lambda`],
		explanation: `リアルタイムでデータをAmazon OpenSearch Serviceにプッシュするためには、AWS Lambdaが使用できます。`
	}, {
		id: 4,
		question: `Amazon Kinesis Firehoseを使用するとデータはどうストリームされますか？`,
		options: [`リアルタイムで`, `ほぼリアルタイムで`, `遅延を伴って`, `不定期に`],
		multipleAnswers: false,
		correctAnswers: [`ほぼリアルタイムで`],
		explanation: `Amazon Kinesis Firehoseを使用すると、データはほぼリアルタイムでストリームされます。`
	}, {
		id: 5,
		question: `Amazon OpenSearch Serviceで解析したデータに基づいて何を作成しますか？`,
		options: [`データベース`, `アップロードファイル`, `ダッシュボード`, `統計報告書`],
		multipleAnswers: false,
		correctAnswers: [`ダッシュボード`],
		explanation: `Amazon OpenSearch Serviceでは解析したデータに基づいて視覚化を作成し、ダッシュボードを作成することができます。`
	}]
}, {
	id: 52,
	question: `IT会社がAWSクラウドを活用して新たなアプリケーションの開発に取り組んでいます。アプリケーションは、色々な場所で配備されているスマートホームデバイスからビデオファイルを収集する必要があります。デバイスから得られたファイルはリアルタイムで分析を行い、画像がビデオファイルと一致する場合には、住宅ユーザーのアプリに通知を送る必要があります。全てのビデオファイルは分析後に消去する必要があります。チームは、最小の手間で設定できる高速でスケーラブルなソリューションを求めています。これらの要求を満たす適切な解決策は何でしょうか？`,
	options: [`Amazon Kinesis Video Streamsを使ってビデオファイルを取得します。データはAmazon DynamoDBに保管します。Amazon Rekognitionを活用してビデオファイルの分析を行い、スマートホームアプリに警告を送信します。`, `Amazon Kinesis Firehoseを使ってビデオファイルを取得します。データはAmazon S3バケットに保管します。Amazon Rekognitionを活用してビデオファイルの分析を行い、スマートホームアプリに警告を送信します。`, `Amazon Kinesis Video Streamsを使ってビデオファイルを取得します。Amazon Rekognitionを活用してビデオファイルの分析を行い、スマートホームアプリに警告を送信します。`, `Amazon Kinesis Data Streamsを用いてビデオファイルを取得します。Amazon Kinesis Data Analyticsを利用してビデオファイルを分析します。AWS Event Bridgeを使ってAmazon SNSに通知を行い、スマートホームアプリに警報を送信します。`],
	multipleAnswers: false,
	correctAnswers: [`Amazon Kinesis Video Streamsを使ってビデオファイルを取得します。Amazon Rekognitionを活用してビデオファイルの分析を行い、スマートホームアプリに警告を送信します。`],
	explanation: `Amazon Rekognitionは画像とビデオファイルを解析する完全マネージド型でスケーラブルなサービスです。Amazon Kinesis Video Streamsは様々なソースからのストリーミングビデオを安全に収集し、それをAWSへと送信するサービスです。この場合、数千のスマートホームデバイスからのビデオファイルはAmazon Kinesis Video Streamsを活用し、安全に収集します。それらのビデオファイルがAmazon Kinesis Video Streamsに存在すると、Amazon Rekognitionがデータのリアルタイム分析を行います。処理終了後、ビデオファイル内の特定の画像やオブジェクトに一致した場合、エンドユーザーに通知を送ります。 Amazon Kinesis Video StreamsとAmazon Rekognitionの両方とも、何も構築や管理する必要なく、需要に応じてスケールアップもしくはダウンすることができます。リアルタイム分析が可能なため、ビデオファイルを別のストレージサービスで保存する必要はありません。選択肢Aは不正解です。なぜならAmazon RekognitionはAmazon Kinesis Video Streamsから直接データを受取ることができるため、Amazon DynamoDBでデータを保存する必要はありません。選択肢Bは不正解です。なぜなら、データの変換や将来的な要件のためのデータ保存が不要なため、ビデオファイルをAmazon Kinesis Video streamsにストリーミングすることが、Amazon Kinesis Firehoseより優れた選択です。選択肢Dは不正解です。なぜなら、Amazon Kinesis Data Analytics、AWS EventBridge、およびAmazon SNSを設定するためには余分な労力が必要となります。詳しい情報は以下のリンクをご覧ください: https://aws.amazon.com/rekognition/connected-home/ https://aws.amazon.com/rekognition/media-analysis/?nc=sn&loc=2&dn=1 https://aws.amazon.com/kinesis/video-streams/features/?nc=sn&loc=2`,
	subQuestions: [{
		id: 1,
		question: `AWSのどのサービスを使えば、ストリーミングビデオを安全に収集し、それをAWSへと送信することが可能でしょうか？`,
		options: [`Amazon Kinesis Video Streams`, `Amazon Kinesis Firehose`, `Amazon S3`, `Amazon DynamoDB`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Kinesis Video Streams`],
		explanation: `Amazon Kinesis Video Streamsはストリーミングビデオを安全に収集し、それをAWSへと送信するためのサービスです。`
	}, {
		id: 2,
		question: `AWSのどのサービスを使えば、ビデオファイルのリアルタイム分析が可能でしょうか？`,
		options: [`Amazon Kinesis Video Streams`, `Amazon Rekognition`, `Amazon Kinesis Data Analytics`, `Amazon Kinesis Firehose`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Rekognition`],
		explanation: `Amazon Rekognitionは画像とビデオファイルを解析する完全マネージド型でスケーラブルなサービスで、ビデオファイルのリアルタイム分析が可能です。`
	}, {
		id: 3,
		question: `ビデオファイルをリアルタイムで分析後、保存する必要はありますか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`いいえ`],
		explanation: `リアルタイム分析が可能なため、ビデオファイルを別のストレージサービスで保存する必要はありません。`
	}, {
		id: 4,
		question: `Amazon RekognitionはAmazon Kinesis Video Streamsから直接データを受け取ることが可能ですか？`,
		options: [`はい`, `いいえ`],
		multipleAnswers: false,
		correctAnswers: [`はい`],
		explanation: `はい、Amazon RekognitionはAmazon Kinesis Video Streamsから直接データを受け取ることが可能です。`
	}, {
		id: 5,
		question: `ビデオファイルはどのサービスよりストリーミングするのが優れた選択でしょうか？`,
		options: [`Amazon Kinesis Video Streams`, `Amazon Kinesis Firehose`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Kinesis Video Streams`],
		explanation: `ビデオファイルのストリーミングには、データの変換や将来的な要件のためのデータ保存が不要なため、Amazon Kinesis Video streamsが優れた選択です。`
	}]
}, {
	id: 53,
	question: `エンジニアリング企業が複数の工場全体の数千の機器からの産業データを集めて保存し、分析するためのソリューションを模索中です。彼らは現在オンプレミスで動作しているサードパーティのデータベースを利用したコンテナベースのアプリケーションをAWSクラウドに移行希望しています。このアプリケーションについて、インフラのプロビジョニングが不要なサーバーレスオプションを求めています。オープンソースAPIのサポートは必要ありません。また、AWSクラウド上にある全ての機器が送出する数百万のデータポイントを保存できるスケーラブルでサーバーレスなデータベースを探しています。これらのデータは毎日分析され、機器の状態についてのインサイトを提供します。これらの要件を満たすように設計するには、どのような作業を行なえばよいでしょうか？`,
	options: [`Amazon EKSを使用してアプリケーションのコンテナ化を行い、Amazon TimestreamにデータをストリームするためにAmazon Kinesis Data StreamsとAmazon Kinesis Data Analyticsを利用します。データ分析にはAmazon Timestreamを使用し、結果を視覚化するためにAmazon QuickSightを利用します。`, `Amazon ECSとEC2ランチタイプを使用してアプリケーションのコンテナ化を行い、Amazon S3にデータをストリームするためにAmazon Kinesis Data StreamsとAmazon Kinesis Data Analyticsを利用します。データ分析にはAmazon Aurora Serverlessを使用し、結果を視覚化するためにAmazon QuickSightを利用します。`, `Amazon EKSを使用してアプリケーションのコンテナ化を行い、Amazon S3にデータをストリームするためにAmazon Kinesis Data StreamsとAmazon Kinesis Data Analyticsを利用します。データ分析にはAmazon Aurora Serverlessを使用し、結果を視覚化するためにAmazon QuickSightを利用します。`, `Amazon ECSとFargateランチタイプを使用してアプリケーションのコンテナ化を行い、Amazon TimestreamにデータをストリームするためにAmazon Kinesis Data Streamsを利用します。データ分析にはAmazon Timestreamを使用し、リザルトを視覚化するためにAmazon QuickSightを利用します。`],
	multipleAnswers: false,
	correctAnswers: [`Amazon ECSとFargateランチタイプを使用してアプリケーションのコンテナ化を行い、Amazon TimestreamにデータをストリームするためにAmazon Kinesis Data Streamsを利用します。データ分析にはAmazon Timestreamを使用し、リザルトを視覚化するためにAmazon QuickSightを利用します。`],
	explanation: `答えはDです。 Amazon ECSを使用すれば、コンテナ化されたアプリケーションのデプロイと管理、そしてスケーリングを行なうことができます。これは完全にマネージド型のオーケストレーションサービスです。Amazon Timestreamは、スケーラブルでマネージド型の時系列データベースで、トリリオンにも及ぶ時系列データを保存、分析することが可能です。Fargateランチタイプを使用すれば、Amazon EC2インスタンスのプロビジョニングが不要となります。AWSがCPU要件に基づいてコンテナを稼働させます。 時系列データベースとしてAmazon Timestreamを使用することで、トリリオンものクエリをパフォーマンスを落とさずに処理することができます。データをAmazon Timestreamまでストリーミングするために、Amazon Kinesis Data StreamsとAmazon Kinesis Data Analyticsを使用することができます。データの視覚化にはAmazon QuickSightを使用することができます。そのため、Dのオプションが最も適しています。 他の選択肢についてですが、A、B、Cの選択肢に含まれるオープンソースAPIをサポートするアプリケーションは必要ありません。また、BとCの選択肢に含まれるAmazon Aurora Serverlessを使用することは、トリリオンのデータポイントを保存し、分析するには適していません。時系列データベースが必要で、Amazon Timestreamが更に適合します。`,
	subQuestions: [{
		id: 1,
		question: `以下のうち、サーバーレスオプションを提供しているAWSの機能はどれでしょうか？`,
		options: [`Amazon EC2`, `Amazon ECS with Fargate`, `Amazon RDS`, `Amazon EBS`],
		multipleAnswers: false,
		correctAnswers: [`Amazon ECS with Fargate`],
		explanation: `Amazon ECS with Fargateはコンテナを運用する際にサーバーやインスタンスを意識せずに利用できるサービスです。したがって、これはサーバーレスオプションを提供しています。`
	}, {
		id: 2,
		question: `以下のAWSのサービスのうち、大量のデータを収集し分析するためのスケーラブルでサーバーレスなデータベースとして利用できるものはどれでしょうか？`,
		options: [`Amazon RDS`, `Amazon Aurora`, `Amazon S3`, `Amazon Timestream`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Timestream`],
		explanation: `Amazon Timestreamは時系列データベースで、大量のデータを収集し、処理することができます。これはサーバーレスのオプションとして使用できます。`
	}, {
		id: 3,
		question: `以下のAWSのサービスのうち、大規模なデータストリームを処理するために使用できるものはどれでしょうか？`,
		options: [`Amazon S3`, `Amazon Lambda`, `Amazon Kinesis Data Streams`, `Amazon EC2`],
		multipleAnswers: false,
		correctAnswers: [`Amazon Kinesis Data Streams`],
		explanation: `Amazon Kinesis Data Streamsは大規模なリアルタイムデータストリームを収集し処理するためのサービスです。`
	}, {
		id: 4,
		question: `以下のAWSのサービスのうち、視覚化ツールとして利用できるものはどれでしょうか？`,
		options: [`Amazon QuickSight`, `Amazon ECS`, `Amazon Timestream`, `Amazon Kinesis Data Streams`],
		multipleAnswers: false,
		correctAnswers: [`Amazon QuickSight`],
		explanation: `Amazon QuickSightは視覚化ツールとして利用できます。データを分析し、視覚化することができます。`
	}, {
		id: 5,
		question: `以下のAWSのサービスのうち、コンテナ化アプリケーションのデプロイと管理を行うことができるものはどれでしょうか？`,
		options: [`Amazon EC2`, `Amazon S3`, `Amazon ECS`, `Amazon Timestream`],
		multipleAnswers: false,
		correctAnswers: [`Amazon ECS`],
		explanation: `Amazon ECSはコンテナ化されたアプリケーションのデプロイ、管理、そしてスケーリングが行えるサービスです。`
	}]
}, {
	id: 57,
	question: `あなたの企業は、WebSocketプロトコルを活用して動作するメッセージングアプリを持っています。現在、このアプリケーションはオンプレミス環境で稼働していますが、AWSのクラウドプラットフォームへ移行する計画を立てています。移行の目的として運用コストの削減とコスト効率化が挙げられています。また、提案するセットアップは、スケーラビリティがあり、Amazon S3バケットによるメッセージのストレージと統合が可能なものであるべきです。なお、この際にアプリケーションのコードを変更することなく、これらの要件全てを実現するソリューションは何でしょうか？`,
	options: [`Amazon SQSのFIFOキューとAmazon EC2インスタンスを併用し、アプリケーションをAWSクラウド上に展開します。`, `Amazon SQSのスタンダードキューとAmazon EC2インスタンスを併用し、アプリケーションをAWSクラウド上に展開します。`, `RabbitMQを導入したAmazon EC2インスタンスを利用し、アプリケーションをAWSクラウド上に展開します。`, `Amazon MQとAmazon EC2インスタンスを併用し、アプリケーションをAWSクラウド上に展開します。`],
	multipleAnswers: false,
	correctAnswers: [`Amazon MQとAmazon EC2インスタンスを併用し、アプリケーションをAWSクラウド上に展開します。`],
	explanation: `正解は「Amazon MQとAmazon EC2インスタンスを併用し、アプリケーションをAWSクラウド上に展開します。」です。 Amazon MQは完全にマネージドなメッセージングブローカーサービスであり、JMS、NMS、AMQP 1.0および0.9.1、STOMP、MQTT、WebSocketなどのプロトコルに対応しています。アプリケーションコードの変更なく、運用コストを削減し、コスト効率を達成するためにAWSクラウドへメッセージングブローカーを移行する最適な選択肢となります。 選択肢AおよびBのAmazon SQSでは、高信頼性とパフォーマンスのメッセージブローカーを提供しますが、アプリケーションコードの変更が必要となるため、本ケースには適していません。 選択肢CのRabbitMQを導入したAmazon EC2インスタンスでは、高度な制御が可能ですが、運用コストが増加するため、本ケースの要件には適していません。 詳細は下記URLをご参照ください。 https://aws.amazon.com/amazon-mq/features/ https://aws.amazon.com/amazon-mq/faqs/`,
	subQuestions: [{
		id: 1,
		question: `Amazon MQはどのようなプロトコルに対応していますか？`,
		options: [`JMS、NMS、AMQP 1.0および0.9.1、STOMP、MQTT、WebSocket`, `HTTP、HTTPS`, `TCP、UDP`, `IMAP、POP3、SMTP`],
		multipleAnswers: false,
		correctAnswers: [`JMS、NMS、AMQP 1.0および0.9.1、STOMP、MQTT、WebSocket`],
		explanation: `Amazon MQは完全にマネージドなメッセージングブローカーサービスであり、JMS、NMS、AMQP 1.0および0.9.1、STOMP、MQTT、WebSocketといった様々なプロトコルに対応しています。`
	}, {
		id: 2,
		question: `Amazon SQSとAmazon MQの違いは何ですか？`,
		options: [`Amazon SQSは特定のプロトコルに制約があるがAmazon MQは多くのプロトコルに対応している`, `Amazon SQSはメッセージングをサポートしないがAmazon MQはサポートする`, `Amazon MQはスケーラビリティがないがAmazon SQSはスケーラビリティがある`, `Amazon SQSはAWSクラウド上で動作するがAmazon MQはオンプレミスでしか動作しない`],
		multipleAnswers: false,
		correctAnswers: [`Amazon SQSは特定のプロトコルに制約があるがAmazon MQは多くのプロトコルに対応している`],
		explanation: `Amazon SQSとAmazon MQの最大の違いは、対応しているプロトコルの範囲です。Amazon SQSは限定的なプロトコルに制約があるのに対し、Amazon MQは多くのプロトコル（JMS、NMS、AMQP 1.0および0.9.1、STOMP、MQTT、WebSocketなど）に対応しています。これにより、既存のアプリケーションコードを変更することなく、メッセージングブローカーをAWSクラウドに移行することができます。`
	}, {
		id: 3,
		question: `オンプレミス環境からAWSへの移行で、アプリケーションコードを変更せずにメッセージングブローカーを移行するための適切な選択肢は何ですか？`,
		options: [`Amazon SQSを利用する`, `RabbitMQを利用する`, `Amazon S3を利用する`, `Amazon MQを利用する`],
		multipleAnswers: false,
		correctAnswers: [`Amazon MQを利用する`],
		explanation: `Amazon MQはアプリケーションコードの変更なく、運用コストを削減し、コスト効率を達成するためにAWSクラウドへメッセージングブローカーを移行する最適な選択肢です。これは、Amazon MQが多くのプロトコルに対応しており、完全に管理されたサービスであるためです。`
	}, {
		id: 4,
		question: `以下のAWSサービスのうち、WebSocket プロトコルを直接サポートしているのはどれですか？`,
		options: [`Amazon S3`, `Amazon EC2`, `Amazon MQ`, `Amazon RDS`],
		multipleAnswers: false,
		correctAnswers: [`Amazon MQ`],
		explanation: `Amazon MQは、JMS、NMS、AMQP 1.0および0.9.1、STOMP、MQTT、WebSocketなどのプロトコルに対応した、完全にマネージドなメッセージングブローカーサービスです。`
	}, {
		id: 5,
		question: `メッセージングアプリのクラウド移行を考える際、スケーラビリティやコスト効率を重視する場合、どのAWSサービスを利用するのが適切でしょうか？`,
		options: [`Amazon EC2`, `Amazon RDS`, `Amazon S3`, `Amazon MQ`],
		multipleAnswers: false,
		correctAnswers: [`Amazon MQ`],
		explanation: `メッセージングアプリケーションをクラウドに移行する場合、アプリケーションコードの変更せず、スケーラビリティを考慮し、コスト効率を求めるならば、Amazon MQが適切な選択となります。これは、多くのプロトコルをサポートし、完全に管理されたサービスであるためです。`
	}]
}, {
	id: 58,
	question: `ある製造業の会社がオンプレミスで保管しているデータを分析したいと考えています。分析の対象となるデータのアプリケーションは、データファイルのコピーにSFTPプロトコルのみを使用しています。各月の始めには大量のデータが処理される予定で、データのコピーと分析は手動介入無しにコスト効率よく行われ、これらのデータ量の変化に対応できるようにする必要があります。すでにAWS Direct Connectの10ギガリンクを使用したハイブリッド接続が実施されています。このデータ転送を容易にするためにどのようなソリューションを設計すべきでしょうか？`,
	options: [`AWSトランスファーファミリーを利用して、オンプレミスの場所からAmazon S3にファイルを保存します。保存されたデータの分析にはAmazon Athenaを使用します。`, `AWS DataSyncを利用して、オンプレミスの場所からAmazon S3にファイルを保存します。保存されたデータの分析にはAmazon Athenaを使用します。`, `AWS Storage Gatewayを利用して、オンプレミスからAmazon EBSにデータを転送します。保存されたデータを分析するために、Amazon EC2インスタンス上に配置されているサードパーティ製のツールを使用します。`, `AWS DataSyncを利用して、オンプレミスの場所からAmazon EFSにファイルを保存します。保存されたデータの分析にはAmazon Athenaを使用します。`],
	multipleAnswers: false,
	correctAnswers: [`AWSトランスファーファミリーを利用して、オンプレミスの場所からAmazon S3にファイルを保存します。保存されたデータの分析にはAmazon Athenaを使用します。`],
	explanation: `正解は「AWSトランスファーファミリーを利用して、オンプレミスの場所からAmazon S3にファイルを保存します。保存されたデータの分析にはAmazon Athenaを使用します。」です。AWSトランスファーファミリーは、AWSストレージサービスとの間でSFTP、FTPS、FTP、及び AS2 プロトコルを介してデータファイルを転送する完全マネージドサービスです。これは動的なワークロードをサポートし、データ転送が急増した際に手動で調整する必要がないようにします。S3バケットに転送されたデータは、Amazon Athenaで直接分析できます。その他の選択肢について、AWS DataSync はSFTPプロトコルを使ったデータ移動に適しておらず、AWS Storage Gateway はSFTPプロトコルのデータ転送をサポートしていません。また、Amazon EC2 インスタンスを使った第三者ツールの利用は追加コストが発生する可能性があり、Amazon EFSにデータを保存するのはコストがかかるため、それぞれ不適切です。`,
	subQuestions: [{
		id: 1,
		question: `AWS Direct Connectの主な利用目的は何ですか？`,
		options: [`オンプレミスの環境とAWS環境間でデータ転送を容易に行う`, `AWSのサービスを無料で使用する`, `オンプレミスの環境でAWSのサービスを使用する`, `AWS環境へのマイグレーションをサポートする`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスの環境とAWS環境間でデータ転送を容易に行う`],
		explanation: `AWS Direct Connectは、オンプレミスのデータセンターとAWSのデータセンターを専用ネットワーク接続で直接つなぎ、インターネット接続を介さずにAWSへのデータ転送を行うことができます。これにより、データ転送のパフォーマンスと一貫性が向上し、データ転送コストが削減できます。`
	}, {
		id: 2,
		question: `AWSトランスファーファミリーはどのようなサービスですか？`,
		options: [`SFTP、FTPS、FTPプロトコルを利用してAWSストレージサービスとデータを転送するサービス`, `オンプレミスのデータベースをAWS Cloudへ移行するためのサービス`, `大量のデータを高速に転送するためのデータ転送サービス`, `AWS内で複数のサービス間のデータ転送を管理するサービス`],
		multipleAnswers: false,
		correctAnswers: [`SFTP、FTPS、FTPプロトコルを利用してAWSストレージサービスとデータを転送するサービス`],
		explanation: `AWSトランスファーファミリーは、SFTP、FTPS、FTP、及び AS2 プロトコルを介してデータファイルを転送する完全マネージドサービスです。これにより、既存の転送作業を維持しながらデータをAWSへ移動でき、データ移動後に構築、スケール、運用するためのインフラストラクチャが不要になります。`
	}, {
		id: 3,
		question: `Amazon Athenaはどんな特徴を持つサービスですか？`,
		options: [`AWSのサーバーレススケーラブルクエリサービスで、S3上のデータを直接SQLでクエリできる`, `リレーショナルデータベースサービスで、オンプレミスのデータベースを完全に管理する`, `分散ストレージと分散コンピューティングを組み合わせたビッグデータ分析のためのサービス`, `ユーザーが自分のビジネス上の問いにダッシュボードとビジュアライゼーションを使って答えるためのサービス`],
		multipleAnswers: false,
		correctAnswers: [`AWSのサーバーレススケーラブルクエリサービスで、S3上のデータを直接SQLでクエリできる`],
		explanation: `Amazon Athenaは、AWSのサーバーレスクエリサービスで、S3上のデータを直接標準SQLでクエリすることができます。ビッグデータのセットアップや管理、データウェアハウスのセットアップ、データ移動が不要なので、簡単にデータ分析を開始でき、結果は迅速に表示されます。`
	}, {
		id: 4,
		question: `AWS DataSyncはどのようなスキームで使用しますか？`,
		options: [`FTPプロトコルを使ってデータを移行する`, `SFTPプロトコルを使ってデータを移行する`, `専用のデータ転送プロトコルを使って高速ソースからマルチパート並行データ転送を行う`, `データベース間でレプリケーションを行う`],
		multipleAnswers: false,
		correctAnswers: [`専用のデータ転送プロトコルを使って高速ソースからマルチパート並行データ転送を行う`],
		explanation: `AWS DataSyncはオンプレミスのストレージとパブリッククラウドのAWSストレージサービス(S3, EFS, FSx for Windows Server)間のデータ移行、またはAWSの領域間でのデータコピーを自動化して高速化させるサービスです。専用のデータ転送プロトコルを使用し、ソースからマルチパート並行データ転送を行うことで大きなデータの移行を効率的に行います。`
	}, {
		id: 5,
		question: `AWS Storage Gatewayはどのようなサービスですか？`,
		options: [`オンプレミスのストレージシステムとクラウドストレージをシームレスに接続する`, `AWSのストレージサービス間でデータを転送する`, `データを高速に転送するためのデータゲートウェイ`, `AWSのセキュリティを強化するためのゲートウェイ`],
		multipleAnswers: false,
		correctAnswers: [`オンプレミスのストレージシステムとクラウドストレージをシームレスに接続する`],
		explanation: `AWS Storage Gatewayは、オンプレミスのストレージシステムとAWSのクラウドストレージをシームレスに接続し、ハイブリッドクラウドストレージ環境を構築できるサービスです。これにより、データを安全に保存しながら、S3、Glacier、EBSなどのAWSのストレージサービスを利用してデータを効率的に管理、分析、バックアップ、復元することができます。`
	}]
},]

export default quizData;