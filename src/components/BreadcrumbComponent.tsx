import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const BreadcrumbComponent = () => {
  return (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
      <BreadcrumbLink href="/dashboard/">Início</BreadcrumbLink>
      </BreadcrumbItem>
      
      <BreadcrumbSeparator />
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadcrumbComponent
