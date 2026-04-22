import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function ModernExperience() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-gray-50 mb-6">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Career Path</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {/* Work Experience */}
            <Card className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      ML Engineer Intern
                    </h3>
                    <div className="text-lg font-semibold text-blue-600 mb-3">
                      AIDRE CONSULTING
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Apr - Jun 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Île-de-France</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <div>
                          <div className="font-semibold text-gray-900">Generative AI & RAG</div>
                          <div className="text-sm text-gray-600">Autonomous AI agent development (LangChain, LlamaIndex)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <div>
                          <div className="font-semibold text-gray-900">Cloud Engineering</div>
                          <div className="text-sm text-gray-600">Automated data pipelines to cloud environments</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <div>
                          <div className="font-semibold text-gray-900">NLP & Search</div>
                          <div className="text-sm text-gray-600">Semantic search architecture for corpus alignment</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                        <div>
                          <div className="font-semibold text-gray-900">System Reliability</div>
                          <div className="text-sm text-gray-600">Content versioning system (99.97% uptime)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Python", "RAG", "LangChain", "Cloud APIs", "NLP", "FastAPI"].map((tech) => (
                      <Badge key={tech} className="bg-blue-50 text-blue-700 border-0 px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Education */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-3xl p-8 hover:border-purple-200 transition-all">
                <div className="flex gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-purple-600 mb-1">2026 - 2029</div>
                    <h4 className="text-xl font-bold text-gray-900">Engineering Degree</h4>
                    <div className="text-gray-700 font-medium">EFREI Paris</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Big Data & Machine Learning</div>
                  <div className="text-sm text-gray-600">Work-study: 2 days school / 3 days company</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-purple-100 text-purple-700 border-0">Deep Learning</Badge>
                    <Badge className="bg-purple-100 text-purple-700 border-0">Cloud Computing</Badge>
                    <Badge className="bg-purple-100 text-purple-700 border-0">MLOps</Badge>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 rounded-3xl p-8 hover:border-emerald-200 transition-all">
                <div className="flex gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-emerald-600 mb-1">2023 - 2026</div>
                    <h4 className="text-xl font-bold text-gray-900">Bachelor's Degree</h4>
                    <div className="text-gray-700 font-medium">University of Le Havre</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Computer Science</div>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                    <Award className="w-4 h-4" />
                    WITH HONORS
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className="bg-emerald-100 text-emerald-700 border-0">Algorithms</Badge>
                    <Badge className="bg-emerald-100 text-emerald-700 border-0">Data Structures</Badge>
                    <Badge className="bg-emerald-100 text-emerald-700 border-0">Databases</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
