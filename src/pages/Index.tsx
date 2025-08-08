import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Phone, Zap, TrendingUp, Play, Star, Shield, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header with Urgency Badge */}
      <div className="bg-red-600 text-center py-3">
        <Badge variant="secondary" className="bg-red-500 text-white border-0 text-sm font-bold animate-pulse">
          🔥 OFERTA DE LANÇAMENTO - ÚLTIMAS HORAS
        </Badge>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mestre das{" "}
            <span className="text-orange-500">Ligações Lucrativas</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            A <span className="text-orange-500 font-semibold">revolução da prospecção</span> que está{" "}
            <span className="text-green-500 font-semibold">multiplicando vendas</span> enquanto você dorme.
          </p>

          {/* Main Value Proposition */}
          <Card className="bg-slate-800 border-slate-700 my-12 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
              Crie robôs de prospecção por ligação telefônica
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Que trabalham <span className="text-green-500 font-semibold">todos os dias</span> oferecendo
              seu produto e filtrando <span className="text-orange-500 font-semibold">somente quem tem interesse</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-orange-500" />
                <span className="font-semibold">Ligações Automatizadas</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold">IA de Reconhecimento</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <span className="font-semibold">Leads Qualificados</span>
              </div>
            </div>
          </Card>

          <div className="bg-slate-800 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-300 mb-2">
              Seus vendedores não são <span className="line-through text-gray-500">caçadores de oportunidade</span>
            </p>
            <p className="text-xl font-bold">
              São <span className="text-green-500">fechadores de negócio</span>. Dê a eles{" "}
              <span className="text-orange-500">o cliente certo</span>.
            </p>
          </div>

          {/* Pricing Section */}
          <Card className="bg-slate-800 border-orange-500 border-2 p-8 mb-8">
            <p className="text-lg text-gray-400 mb-2 line-through">De R$197,90 por apenas</p>
            <h3 className="text-5xl font-bold text-green-500 mb-2">8x de R$5,38</h3>
            <p className="text-xl text-gray-300 mb-6">(ou R$37,90 à vista)</p>
            
            <p className="text-orange-500 font-semibold mb-6">
              ⚡ Domine a prospecção por voz antes da concorrência
            </p>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-4 px-8 rounded-lg mb-6 animate-pulse">
              🚀 QUERO COMEÇAR AGORA
            </Button>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Suporte direto</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Você não precisa de mais vendedores,{" "}
            <span className="text-orange-500">precisa de leads melhores</span>.
          </h2>
          
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            Se você ainda entrega <span className="text-red-400 font-semibold">lead frio</span> para os seus vendedores,
            sinceramente você está <span className="text-red-400 font-semibold">rasgando dinheiro!</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-500 p-6">
              <div className="text-center mb-6">
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-400">ANTES (Seu Problema)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Vendedores gastam tempo caçando leads frios</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Taxa de conversão baixíssima (1-3%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Equipe desmotivada com tantos "NÃOs"</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Dinheiro jogado fora em prospecção manual</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Concorrência sempre um passo à frente</span>
                </li>
              </ul>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-500 p-6">
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">DEPOIS (Sua Solução)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Robô filtra apenas <strong>clientes interessados</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Taxa de conversão dispara (15-30%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Vendedores focam só em <strong>fechar negócios</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">ROI multiplicado por trabalhar 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Você se torna <strong>referência no mercado</strong></span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Automatize a prospecção de ligações</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              E deixe que o robô entregue para sua equipe de vendas apenas
              clientes quentes e <strong className="text-green-500">prontos para fechar</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Examples Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Exemplos de Robôs que você vai aprender a criar
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Ouça como funciona na prática:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                🤖 Robô com sua voz e reconhecimento de fala por IA
              </h3>
              <div className="bg-slate-700 p-4 rounded-lg mb-4">
                <audio controls className="w-full">
                  <source src="/audio-example-1.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
              <p className="text-gray-300 text-sm">Venda de serviços</p>
            </Card>

            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                📢 Divulgue grupos e produtos
              </h3>
              <div className="bg-slate-700 p-4 rounded-lg mb-4">
                <audio controls className="w-full">
                  <source src="/audio-example-2.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
              <p className="text-gray-300 text-sm">Marketing de produtos</p>
            </Card>

            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                💰 Empréstimos Consignado
              </h3>
              <div className="bg-slate-700 p-4 rounded-lg mb-4">
                <audio controls className="w-full">
                  <source src="/audio-example-3.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
              <p className="text-gray-300 text-sm">Serviços financeiros</p>
            </Card>

            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                🏢 Captação de leads B2B
              </h3>
              <div className="bg-slate-700 p-4 rounded-lg mb-4">
                <audio controls className="w-full">
                  <source src="/audio-example-4.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
              <p className="text-gray-300 text-sm">Vendas corporativas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Tenha acesso ao <span className="text-orange-500">método completo</span>
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Com aulas práticas e diretas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Robô Básico do Zero</h3>
              </div>
              <p className="text-gray-300">Como criar um robô de ligações básico do zero</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">IA de Reconhecimento</h3>
              </div>
              <p className="text-gray-300">Ative reconhecimento de voz por IA para identificar palavras faladas</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Integração WhatsApp</h3>
              </div>
              <p className="text-gray-300">Integre o robô ao WhatsApp para chamar os clientes interessados automaticamente</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Clonagem de Voz</h3>
              </div>
              <p className="text-gray-300">Clone sua própria voz para o robô usar nas ligações</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Scripts de Conversão</h3>
              </div>
              <p className="text-gray-300">Scripts testados e aprovados para máxima conversão</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Automação Completa</h3>
              </div>
              <p className="text-gray-300">Sistema funcionando 24/7 sem sua intervenção</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Veja os resultados de quem já está usando
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Em 30 dias consegui 200 leads qualificados. Minha equipe agora só fecha negócios!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-bold">Marco Silva</p>
                  <p className="text-sm text-gray-400">CEO Tech Solutions</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Incrível! O robô trabalha enquanto eu durmo. Aumento de 300% nas vendas!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold">Ana Costa</p>
                  <p className="text-sm text-gray-400">Consultora de Vendas</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Método simples e direto. Em 1 semana já estava com o robô funcionando perfeitamente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-bold">Roberto Lima</p>
                  <p className="text-sm text-gray-400">Empresário</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ / Objection Handling */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                🤔 É difícil de implementar?
              </h3>
              <p className="text-gray-300">
                Não! O curso foi criado para iniciantes. Com aulas passo a passo, você terá seu robô funcionando em poucos dias, mesmo sem conhecimento técnico.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                💰 Quanto custa para manter o robô funcionando?
              </h3>
              <p className="text-gray-300">
                Os custos são mínimos comparado ao retorno. Você paga apenas pelas ligações realizadas, e como o robô qualifica leads, o ROI é sempre positivo.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                ⚖️ É legal usar robôs para ligações?
              </h3>
              <p className="text-gray-300">
                Sim! Desde que seguidas as regulamentações, que ensino no curso. O robô atua como um assistente virtual, sempre identificando-se como tal.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                🎯 Funciona para qualquer nicho?
              </h3>
              <p className="text-gray-300">
                Absolutamente! O método é adaptável para qualquer segmento: consultoria, produtos físicos, digitais, serviços, imóveis, seguros, etc.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                📞 E se o cliente reclamar?
              </h3>
              <p className="text-gray-300">
                O robô é programado para ser educado e respeitoso. Incluo scripts testados que minimizam reclamações e maximizam interesse.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não perca esta oportunidade!
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enquanto você está lendo isso, seus concorrentes podem estar implementando 
            esta tecnologia. Seja o primeiro do seu mercado a dominar a prospecção automatizada.
          </p>

          <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">⏰ OFERTA ESPECIAL - TERMINA EM:</p>
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-black/30 p-3 rounded">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <div className="text-2xl font-bold">59</div>
                  <div className="text-xs">MINUTOS</div>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-xs">SEGUNDOS</div>
                </div>
              </div>
              
              <p className="text-lg line-through opacity-75 mb-2">De R$197,90 por apenas</p>
              <h3 className="text-5xl font-bold text-white mb-2">8x de R$5,38</h3>
              <p className="text-xl mb-6">(ou R$37,90 à vista)</p>

              <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 text-xl font-bold py-6 px-8 rounded-lg mb-4">
                🚀 SIM, EU QUERO DOMINAR AS LIGAÇÕES LUCRATIVAS!
              </Button>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>7 dias de garantia</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Suporte incluso</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-slate-800 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-green-500">
              🎁 BÔNUS EXCLUSIVOS INCLUSOS:
            </h3>
            <ul className="text-left space-y-2 text-white">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Aula para criar áudios que realmente convertem</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Integração com API oficial e não oficial do WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Como ganhar dinheiro vendendo as ligações para outros negócios</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Esta é uma página segura. Seus dados estão protegidos por criptografia SSL. 
            Após a compra, você receberá acesso imediato ao curso por email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mestre das Ligações Lucrativas. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
